"use client";

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import clsx from "clsx";
import BorderLines from "./BorderLines";
import Accordion from "./Accordion";

export default function MagazineContent({ magazine }) {
  const { articles, videos, podcasts, reports, advice } = magazine;

  const [selectedTags, setSelectedTags] = useState([]);
  const [currentItems, setCurrentItems] = useState();
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

  function Items({ currentItems }) {
    return (
      <div className="grid grid-cols-[1fr_2fr_1fr] [&>*:nth-child(5n+2)]:row-span-3 grid-rows-[repeat(6,auto)] gap-4">
        {currentItems?.map((article) => (
          <div key={article._id} className="row-span-2">
            <Image
              src={article.bannerImage?.url}
              alt={article.bannerImage?.alt}
              width={article.bannerImage?.width}
              height={article.bannerImage?.height}
              placeholder={article.bannerImage?.blurDataURL && "blur"}
              blurDataURL={article.bannerImage?.blurDataURL}
            />
            <h2>{article.title}</h2>
            <div className="flex flex-wrap gap-x-2">
              {article.tags.map((tag) => (
                <span key={tag} className={clsx(selectedTags.includes(tag) && "font-bold")}>
                  {tag}
                </span>
              ))}
            </div>
            <p>{article.description}</p>
            <div className="my-2">
              <div className="h-[1px] bg-darkGreen w-full" />
              <div className="h-[5px] w-[5px] bg-darkGreen mt-[-3px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  function PaginatedItems({ itemsPerPage, items }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items?.length;
      // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
      //scroll to top of page
      window.scrollTo(0, 0);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          previousLabel="Forrige side"
          breakLabel="..."
          nextLabel="Næste side"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          pageCount={pageCount}
          className={clsx(
            "flex justify-center gap-4 my-8 items-center p-0 w-full pagination",
            pageCount <= 1 && "hidden"
          )}
        />
      </>
    );
  }

  return (
    <div className="mt-[140px]">
      <div className="flex gap-4">
        <div
          onClick={() => {
            setCurrentItems(null);
            setSelectedTags([]);
          }}
          className={clsx(!currentItems && "font-bold")}
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
      {currentItems == articles && <PaginatedItems itemsPerPage={8} items={filteredItems} />}
      {currentItems == videos && <div>videos</div>}
      {currentItems == podcasts && <div>podcasts</div>}
      {currentItems == reports && <div>reports</div>}
      {currentItems == advice && <div>advice</div>}
      {!currentItems && <div>frontpage</div>}
    </div>
  );
}
