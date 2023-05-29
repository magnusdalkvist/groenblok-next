"use client";

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import clsx from "clsx";
import BorderLines from "./BorderLines";
import Accordion from "./Accordion";
import PaginatedItems from "./PaginatedItems";

export default function MagazineContent({ magazine }) {
  const { articles, videos, podcasts, reports, advice } = magazine;
  const allPosts = [...articles, ...videos, ...podcasts, ...reports, ...advice];

  const [selectedTags, setSelectedTags] = useState([]);
  const [currentItems, setCurrentItems] = useState(allPosts);
  const [filteredItems, setFilteredItems] = useState(currentItems);

  //get all tags from current items
  const allTags = currentItems?.map((item) => item.tags).flat();
  //get unique tags
  const uniqueTags = [...new Set(allTags)];

  const changeTag = (tag) => {
    //if tag is clicked, add tag to selectedTags. if tag is already there, remove it but keep the rest
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    }
    //if tag is not clicked, add tag to selectedTags
    else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    //set filtered articles to articles that matches selected tags
    setFilteredItems(
      currentItems?.filter((item) => {
        return selectedTags.every((tag) => item.tags.includes(tag));
      })
    );

    //if no tags are selected, set filtered articles to all articles
    if (selectedTags.length === 0) {
      setFilteredItems(currentItems);
    }
  }, [selectedTags, currentItems]);

  return (
    <div className="mt-[140px]">
      <div className="flex gap-4">
        <div
          onClick={() => {
            setCurrentItems(allPosts);
            setSelectedTags([]);
          }}
          //if currentItems is not articles,videos,podcasts,reports or advice, make font bold
          className={clsx(
            currentItems !== articles &&
              currentItems !== videos &&
              currentItems !== podcasts &&
              currentItems !== reports &&
              currentItems !== advice &&
              "font-bold"
          )}
        >
          Forside
        </div>
        {Object.entries(magazine).map(([key]) => {
          let title = "undefined";
          if (key === "articles") title = "Artikler";
          if (key === "videos") title = "Videoer";
          if (key === "podcasts") title = "Podcasts";
          if (key === "reports") title = "Rapporter";
          if (key === "advice") title = "Grønne råd";

          return (
            <div
              key={key}
              onClick={() => {
                setCurrentItems(magazine[key]);
                setSelectedTags([]);
              }}
              className={clsx(currentItems == magazine[key] && "font-bold")}
            >
              {title}
            </div>
          );
        })}
      </div>
      <BorderLines side="left">
        <Accordion title="Find by latest tags">
          <div className="flex gap-4">
            {uniqueTags.map((tag, i) => (
              <div
                key={i}
                onClick={() => changeTag(tag)}
                className={clsx(selectedTags.includes(tag) && "font-bold")}
              >
                {tag}
              </div>
            ))}
          </div>
        </Accordion>
      </BorderLines>
      {currentItems == articles ? (
        <Articles items={filteredItems} selectedTags={selectedTags} />
      ) : currentItems == videos ? (
        <Videos items={filteredItems} selectedTags={selectedTags} />
      ) : currentItems == podcasts ? (
        <Podcasts items={filteredItems} selectedTags={selectedTags} />
      ) : currentItems == reports ? (
        <Reports items={filteredItems} selectedTags={selectedTags} />
      ) : currentItems == advice ? (
        <Advice items={filteredItems} selectedTags={selectedTags} />
      ) : (
        <Frontpage items={filteredItems} selectedTags={selectedTags} />
      )}
    </div>
  );
}

function Frontpage({ items, selectedTags }) {
  return (
    <div>
      <div className="frontpage-image">
        <img src="" alt="hej" />
      </div>
      <PaginatedItems
        itemsPerPage={6}
        items={items}
        selectedTags={selectedTags}
        gridLayout="grid-3"
      />
    </div>
  );
}

function Articles({ items, selectedTags }) {
  return (
    <PaginatedItems
      itemsPerPage={8}
      items={items}
      selectedTags={selectedTags}
      gridLayout="grid-3-big"
    />
  );
}

function Videos({ items, selectedTags }) {
  return (
    <PaginatedItems
      itemsPerPage={6}
      items={items}
      selectedTags={selectedTags}
      gridLayout="grid-3"
    />
  );
}

function Podcasts({ items, selectedTags }) {
  return (
    <PaginatedItems
      itemsPerPage={6}
      items={items}
      selectedTags={selectedTags}
      gridLayout="grid-4"
    />
  );
}

function Reports({ items, selectedTags }) {
  return (
    <PaginatedItems
      itemsPerPage={6}
      items={items}
      selectedTags={selectedTags}
      gridLayout="grid-3"
    />
  );
}

function Advice({ items, selectedTags }) {
  return (
    <PaginatedItems
      itemsPerPage={6}
      items={items}
      selectedTags={selectedTags}
      gridLayout="videos"
    />
  );
}
