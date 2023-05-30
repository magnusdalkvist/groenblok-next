import Image from "next/image";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { EventListItem } from "./EventListItem";
import BorderLines from "./BorderLines";
import { useState } from "react";

export default function PaginatedItems({
  itemsPerPage,
  items,
  selectedTags,
  gridLayout,
  scrollToTop = true,
}) {
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
    scrollToTop && window.scrollTo(0, 0);
  };

  return (
    <>
      <Items currentItems={currentItems} selectedTags={selectedTags} gridLayout={gridLayout} />
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

function Items({ currentItems, selectedTags, gridLayout }) {
  switch (gridLayout) {
    case "grid-3-big":
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
    case "grid-3":
      return (
        <div className="grid grid-cols-3 gap-y-4">
          {currentItems?.map((article, i) => (
            <BorderLines key={article._id} side={i % 3 === 1 && "center"}>
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
            </BorderLines>
          ))}
        </div>
      );
    case "grid-4":
      return (
        <div className="grid grid-cols-4 gap-y-4">
          {currentItems?.map((article, i) => (
            <BorderLines
              key={article._id}
              side={
                // in a 4 column grid, the first 3 items should have "right" and the 4th should have "top"
                (i % 4 === 3 && "top") ||
                (i % 4 === 0 && "right") ||
                (i % 4 === 1 && "right") ||
                (i % 4 === 2 && "right") ||
                (i % 4 === 3 && "top")
              }
            >
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
            </BorderLines>
          ))}
        </div>
      );
    case "events":
      return (
        <div className="grid grid-cols-3 gap-y-4">
          {currentItems?.map((event, i) => (
            <BorderLines
              key={i}
              side={
                // in a 3 column grid, the first 2 items should have "right" and the 3rd should have "top"
                i % 3 === 2 ? "top" : "right"
              }
            >
              <EventListItem event={event} />
            </BorderLines>
          ))}
        </div>
      );
    case "events-inverted":
      return (
        <div className="grid grid-cols-3 gap-y-4">
          {currentItems?.map((event, i) => (
            <BorderLines
              color="bg-orangeAccent"
              key={i}
              side={
                // in a 3 column grid, the first 2 items should have "right" and the 3rd should have "top"
                i % 3 === 2 ? "top" : "right"
              }
            >
              <EventListItem tagColor="text-orangeAccent" tagHover="text-darkGreen" event={event} />
            </BorderLines>
          ))}
        </div>
      );
  }
}
