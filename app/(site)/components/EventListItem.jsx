"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useHover } from "./modules/Header";

export function EventListItem({ event, tagColor = "text-darkGreen" }) {
  const [hoverRef, isHovered] = useHover();

  return (
    <Link
      href={"events/" + event.slug.current}
      ref={hoverRef}
      className="eventList flex flex-col gap-2 h-full p-4 hover:bg-gradient-to-b from-orangeAccent to-transparent transition-all duration-200"
    >
      <h4 className="text-2xl mb-8 flex-1">{event.title}</h4>
      <div className="flex items-end justify-between">
        <div
          className={clsx("flex flex-col text-xs flex-1", isHovered ? "text-darkGreen" : tagColor)}
        >
          {event.tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
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
