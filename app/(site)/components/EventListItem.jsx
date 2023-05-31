"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useHover } from "./modules/Header";
import RenderPortableText from "./RenderPortableText";

export function EventListItem({ event, tagColor = "text-darkGreen", selectedTags = [] }) {
  const [hoverRef, isHovered] = useHover();

  if (event._type == "project") {
    return (
      <Link
        href={"/projekter/" + event.slug.current}
        ref={hoverRef}
        className="eventList flex flex-col gap-2 h-full p-4 hover:bg-gradient-to-b from-orangeAccent to-transparent transition-all duration-200"
      >
        <h4 className={clsx("text-2xl flex-1", isHovered ? "text-darkGreen" : tagColor)}>
          {event.title}
        </h4>
        <div className="flex items-end gap-4 justify-between">
          <div
            className={clsx(
              "flex flex-col text-xs flex-1 overflow-hidden",
              isHovered ? "text-darkGreen" : tagColor
            )}
          >
            <div className="flex gap-2">
              {event.tags?.map((tag, i) => (
                <span className={clsx(selectedTags.includes(tag) && "font-bold")} key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <RenderPortableText
                content={event.content}
                preview
                color={isHovered ? "text-darkGreen" : tagColor}
              />
            </div>
          </div>
          <span className={clsx("font-bold text-h3", isHovered ? "text-darkGreen" : tagColor)}>
            {new Date(event.date).toLocaleDateString("da-dk", { day: "2-digit", month: "2-digit" })}
          </span>
        </div>
        <Image
          src={event.image?.url}
          alt={event.image?.alt}
          width={event.image?.width}
          height={event.image?.height}
          placeholder={event.image?.blurDataURL && "blur"}
          blurDataURL={event.image?.blurDataURL}
          className="w-full aspect-[3/1] object-cover rounded"
        />
      </Link>
    );
  }
  return (
    <Link
      href={"/events/" + event.slug.current}
      ref={hoverRef}
      className="eventList flex flex-col gap-2 h-full p-4 hover:bg-gradient-to-b from-orangeAccent to-transparent transition-all duration-200"
    >
      <h4 className="text-2xl mb-8 flex-1">{event.title}</h4>
      <div className="flex items-end justify-between">
        <div
          className={clsx("flex flex-col text-xs flex-1", isHovered ? "text-darkGreen" : tagColor)}
        >
          {event.tags?.map((tag, i) => (
            <span className={clsx(selectedTags.includes(tag) && "font-bold")} key={i}>
              {tag}
            </span>
          ))}
        </div>
        <span className="font-bold text-h3">
          {new Date(event.date).toLocaleDateString("da-dk", { day: "2-digit", month: "2-digit" })}
        </span>
      </div>
      <Image
        src={event.image?.url}
        alt={event.image?.alt}
        width={event.image?.width}
        height={event.image?.height}
        placeholder={event.image?.blurDataURL && "blur"}
        blurDataURL={event.image?.blurDataURL}
        className="w-full aspect-[3/1] object-cover rounded"
      />
    </Link>
  );
}
