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
  scrollTo = undefined,
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
    location.hash = "";
    location.hash = scrollTo;
  };

  return (
    <>
      <Items currentItems={currentItems} selectedTags={selectedTags} gridLayout={gridLayout} />
      <ReactPaginate
        previousLabel="Forrige side"
        breakLabel="..."
        nextLabel="Næste side"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        className={clsx(
          "flex justify-center gap-4 my-8 items-center p-0 w-full pagination",
          pageCount <= 1 && "hidden"
        )}
      />
    </>
  );
}

function AdviceItem(props) {
  return (
    <div className="flex flex-col gap-4">
      <h3>Råd #{props.item.itemNumber}</h3>
      <h4 className="hyphens-auto">{props.item.title}</h4>
      <Image
        src={props.item.bannerImage?.url}
        alt={props.item.bannerImage?.alt}
        width={props.item.bannerImage?.width}
        height={props.item.bannerImage?.height}
        placeholder={props.item.bannerImage?.blurDataURL && "blur"}
        blurDataURL={props.item.bannerImage?.blurDataURL}
        className="w-full"
      />
      <div className="flex flex-wrap gap-x-2 text-orangeAccent">
        {props.item?.tags?.map((tag) => (
          <span key={tag} className={clsx(props.selectedTags.includes(tag) && "font-bold")}>
            {tag}
          </span>
        ))}
      </div>
      <p>{props.item.description}</p>
    </div>
  );
}

function VideoItem(props) {
  const videoID = props.item?.url?.split("/").pop().split("=").pop();
  return (
    <div className="flex flex-col gap-4 ">
      <Image
        src={`https://i.ytimg.com/vi/${videoID}/hq720.jpg`}
        alt="youtube thumbnail"
        width={720}
        height={480}
      />
      <h4 className="flex-1">{props.item.title}</h4>
      <div className="flex flex-wrap gap-x-2">
        {props.item?.tags?.map((tag) => (
          <span
            key={tag}
            className={clsx(props.selectedTags.includes(tag) && "font-bold", "text-orangeAccent")}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ArticleItem(props) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={props.item.bannerImage?.url}
        alt={props.item.bannerImage?.alt}
        width={props.item.bannerImage?.width}
        height={props.item.bannerImage?.height}
        placeholder={props.item.bannerImage?.blurDataURL && "blur"}
        blurDataURL={props.item.bannerImage?.blurDataURL}
      />
      <h4>{props.item.title}</h4>
      <div className="flex flex-wrap gap-x-2">
        {props.item?.tags?.map((tag) => (
          <span
            key={tag}
            className={clsx(props.selectedTags.includes(tag) && "font-bold", "text-orangeAccent")}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="flex-1 lg:flex-none">{props.item.description}</p>
    </div>
  );
}

function ReportsItem(props) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={props.item.bannerImage?.url}
        alt={props.item.bannerImage?.alt}
        width={props.item.bannerImage?.width}
        height={props.item.bannerImage?.height}
        placeholder={props.item.bannerImage?.blurDataURL && "blur"}
        blurDataURL={props.item.bannerImage?.blurDataURL}
        className="w-full"
      />
      <div className="flex flex-wrap gap-x-2">
        {props.item?.tags?.map((tag) => (
          <span key={tag} className={clsx(props.selectedTags.includes(tag) && "font-bold")}>
            {tag}
          </span>
        ))}
      </div>
      <h4 className="hyphens-auto">{props.item.title}</h4>
      <p>{props.item.description}</p>
    </div>
  );
}

function PodcastsItem(props) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={props.item.bannerImage?.url}
        alt={props.item.bannerImage?.alt}
        width={props.item.bannerImage?.width}
        height={props.item.bannerImage?.height}
        placeholder={props.item.bannerImage?.blurDataURL && "blur"}
        blurDataURL={props.item.bannerImage?.blurDataURL}
        className="w-full"
      />
      <div className="flex flex-wrap gap-x-2">
        {props.item?.tags?.map((tag) => (
          <span key={tag} className={clsx(props.selectedTags.includes(tag) && "font-bold")}>
            {tag}
          </span>
        ))}
      </div>
      <h4 className="hyphens-auto">{props.item.title}</h4>
      <p>{props.item.description}</p>
    </div>
  );
}

function Items({ currentItems, selectedTags, gridLayout }) {
  switch (gridLayout) {
    case "advice":
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:[&>*:nth-child(2n+1)]:mt-20 gap-8">
          {currentItems
            ?.sort((a, b) => a.adviceNumber - b.adviceNumber)
            .map((item) => (
              <AdviceItem key={item._id} selectedTags={selectedTags} item={item} />
            ))}
        </div>
      );
    case "videos":
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
          {currentItems?.map((item) => (
            <BorderLines
              key={item._id}
              side="right"
              innerStyle="p-6 h-full"
              className="h-full flex flex-col gap-4"
            >
              <VideoItem selectedTags={selectedTags} item={item} />
            </BorderLines>
          ))}
        </div>
      );
    case "grid-3-big":
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] lg:[&>*:nth-child(5n+2)]:row-span-3 lg:[&>*:nth-child(1n)]:row-span-2 grid-rows-[repeat(6,auto)] gap-4">
          {currentItems?.map((item) => (
            <div key={item._id}>
              <ArticleItem selectedTags={selectedTags} item={item} />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
          {currentItems?.map((item, i) => (
            <BorderLines key={item._id} side="right" innerStyle="p-6">
              {(item._type == "article" && (
                <ArticleItem selectedTags={selectedTags} item={item} />
              )) ||
                (item._type == "podcast" && (
                  <PodcastsItem selectedTags={selectedTags} item={item} />
                )) ||
                (item._type == "report" && (
                  <ReportsItem selectedTags={selectedTags} item={item} />
                )) ||
                (item._type == "video" && <VideoItem selectedTags={selectedTags} item={item} />) ||
                (item._type == "advice" && <AdviceItem selectedTags={selectedTags} item={item} />)}
            </BorderLines>
          ))}
        </div>
      );
    case "reports":
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
          {currentItems?.map((item, i) => (
            <BorderLines key={item._id} side="right" innerStyle="p-6">
              <ReportsItem selectedTags={selectedTags} item={item} />
            </BorderLines>
          ))}
        </div>
      );
    case "grid-4":
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
          {currentItems?.map((item, i) => (
            <BorderLines key={item._id} side="right" innerStyle="p-6">
              <PodcastsItem selectedTags={selectedTags} item={item} />
            </BorderLines>
          ))}
        </div>
      );
    case "events":
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
          {currentItems?.map((event, i) => (
            <BorderLines key={i} innerStyle="p-0 h-full" side="right">
              <EventListItem selectedTags={selectedTags} event={event} />
            </BorderLines>
          ))}
        </div>
      );
    case "events-inverted":
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4">
          {currentItems?.map((event, i) => (
            <BorderLines
              color="bg-orangeAccent"
              key={i}
              innerStyle="p-0 h-full"
              side={i % 3 === 2 ? "" : "right"}
            >
              <EventListItem
                selectedTags={selectedTags}
                tagColor="text-orangeAccent"
                tagHover="text-darkGreen"
                event={event}
              />
            </BorderLines>
          ))}
        </div>
      );
    case "projects":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {currentItems?.map((event, i) => (
            <BorderLines key={i} innerStyle="p-0 h-full" side={i % 2 === 0 ? "right" : "top"}>
              <EventListItem selectedTags={selectedTags} event={event} />
            </BorderLines>
          ))}
        </div>
      );
    case "projects-inverted":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {currentItems?.map((event, i) => (
            <BorderLines
              color="bg-orangeAccent"
              key={i}
              innerStyle="p-0 h-full"
              side={i % 2 === 0 ? "right" : "top"}
            >
              <EventListItem
                selectedTags={selectedTags}
                tagColor="text-orangeAccent"
                tagHover="text-darkGreen"
                event={event}
              />
            </BorderLines>
          ))}
        </div>
      );
  }
}
