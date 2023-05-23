"use client";

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import clsx from "clsx";

export default function RenderArticles({ articles, tags }) {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedTags, setSelectedTags] = useState([]);

  const changeTag = (tag) => {
    //when you click a tag it should be added to the selectedTags array and add to the url
    //if the tag is already in the array it should be removed and removed from the url
    //remove # from tag
    tag = tag.replace("#", "");
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    }
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }

    const tagWithoutHash = tag.replace("#", "");
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    if (params.get("tag") === tagWithoutHash) {
      params.delete("tag");
    } else {
      params.set("tag", tagWithoutHash);
    }
    window.history.replaceState({}, "", `${url.pathname}?${params}`);
    // window.history.pushState({}, "", `${url.pathname}?${params}`);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const searchPramsTag = Array.isArray(params.get("tag"))
      ? params.get("tag")
      : [params.get("tag")];
    setFilteredArticles(
      params.get("tag")
        ? articles.filter((article) =>
            searchPramsTag.every((tag) => article.tags.includes("#" + tag))
          )
        : articles
    );
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
                <span key={tag}>{tag}</span>
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
      <div className="flex gap-4">
        {tags.map((tag, i) => (
          <div key={i} onClick={() => changeTag(tag)}>
            {tag}
          </div>
        ))}
      </div>
      <PaginatedItems itemsPerPage={8} />
    </div>
  );
}
