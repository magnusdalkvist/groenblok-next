"use client";

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import clsx from "clsx";
import BorderLines from "./BorderLines";
import Accordion from "./Accordion";

export default function RenderArticles({ articles, tags }) {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedTags, setSelectedTags] = useState([]);

  const changeTag = (tag) => {
    const tagWithoutHash = tag.replace("#", "");
    if (selectedTags.includes(tagWithoutHash)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagWithoutHash));
    }
    if (!selectedTags.includes(tagWithoutHash)) {
      setSelectedTags([...selectedTags, tagWithoutHash]);
    }
  };

  useEffect(() => {
    //set filtered articles to articles that matches selected tags
    setFilteredArticles(
      articles.filter((article) => {
        return selectedTags.every((tag) => article.tags.includes("#" + tag));
      })
    );

    //if no tags are selected, set filtered articles to all articles
    if (selectedTags.length === 0) {
      setFilteredArticles(articles);
    }
  }, [selectedTags]);

  function Items({ currentItems }) {
    return (
      <div className="grid grid-cols-[1fr_2fr_1fr] [&>*:nth-child(5n+2)]:row-span-3 grid-rows-[repeat(6,auto)] gap-4">
        {currentItems.map((article) => (
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
                <span
                  key={tag}
                  className={clsx(selectedTags.includes(tag.replace("#", "")) && "font-bold")}
                >
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

  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = filteredArticles.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredArticles.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredArticles.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="næste >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< forrige"
          className={clsx("flex justify-center gap-4 my-8", pageCount <= 1 && "hidden")}
        />
      </>
    );
  }

  return (
    <div>
      <BorderLines side="left">
        <Accordion title="Find by latest tags">
          <div className="flex gap-4">
            {tags.map((tag, i) => (
              <div
                key={i}
                onClick={() => changeTag(tag)}
                className={clsx(selectedTags.includes(tag.replace("#", "")) && "font-bold")}
              >
                {tag}
              </div>
            ))}
          </div>
        </Accordion>
      </BorderLines>
      <PaginatedItems itemsPerPage={8} />
    </div>
  );
}
