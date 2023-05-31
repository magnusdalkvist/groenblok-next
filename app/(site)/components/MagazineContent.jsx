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
    <div className="max-w-[1600px] mx-auto">
      <div
        className={clsx(
          currentItems !== articles &&
            currentItems !== videos &&
            currentItems !== podcasts &&
            currentItems !== reports &&
            currentItems !== advice &&
            "bg-[url('tree.jfif')] flex flex-col text-lightBeige bg-cover bg-center aspect-[3/4] mb-8",
          "px-8 text-darkGreen"
        )}
      >
        <h1 className="w-full text-center italic">Grøn Blok Magazine</h1>
        <div className="flex justify-evenly gap-4">
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
                "font-bold",
              "text-h5"
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
                className={clsx(currentItems == magazine[key] && "font-bold", "text-h5")}
              >
                {title}
              </div>
            );
          })}
        </div>
        {currentItems !== articles &&
          currentItems !== videos &&
          currentItems !== podcasts &&
          currentItems !== reports &&
          currentItems !== advice && (
            <div className="flex flex-1 flex-col">
              <div className="relative mt-4">
                <div className="bg-lightBeige w-full h-[1px] " />
                <div className="bg-lightBeige w-[7px] h-[7px] absolute top-[-3px]" />
              </div>
              <div className="flex flex-col gap-12 md:gap-[6rem] lg:gap-[12rem] py-12 flex-1 justify-center">
                <div className="text-right max-w-[40ch] w-1/2 self-end">
                  <div className="text-darkGreen font-bold text-h5">
                    Vækstfondens 3 kriterier for investering af grønne milliarder
                  </div>
                  <div>
                    Ny grøn fremtidsfond øger Vækstfondens investeringsbudget med 10 mia. kr.
                  </div>
                </div>
                <div className="text-right max-w-[40ch] w-1/2 self-end">
                  <div className="text-darkGreen font-bold text-h5">
                    EU har landet en unik aftale om CO2-beskatning
                  </div>
                  <div>
                    Bag de europæiske forkortelser ETS og CBAM gemmer sig en teknokratisk
                    klimarevolution, der med markedsmekanismerne som løftestang nu har fået en
                    kraftig opjustering. De er rasende vigtige, så lær begreberne før din nabo
                  </div>
                </div>
                <div className="max-w-[40ch] w-1/2 text-right self-end">
                  <div className="text-orangeAccent font-bold text-h4">
                    Danmarks grønneste bank er fundet: Merkur andelskasse
                  </div>
                  <div>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution.
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      <div className="px-8 text-darkGreen">
        <BorderLines side="left" innerStyle="p-4">
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
    </div>
  );
}

function Frontpage({ items, selectedTags }) {
  return (
    <PaginatedItems
      itemsPerPage={6}
      items={items}
      selectedTags={selectedTags}
      gridLayout="grid-3"
    />
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
      gridLayout="grid-3"
    />
  );
}
