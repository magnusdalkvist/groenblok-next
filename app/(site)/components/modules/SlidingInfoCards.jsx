"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function SlidingInfoCards({ module }) {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="" datatype="slidingInfoCard">
      <h2>{module?.title}</h2>
      <div className="infoCardsWrapper">
        {module?.cards.map((card, i) => {
          const handleClick = () => {
            setActiveCard(i);
          };
          return (
            <div
              key={i}
              className={clsx("infoCard", i == activeCard && "active")}
              onClick={handleClick}
            >
              <div className="flex flex-col">
                <Image
                  src={card.image?.url}
                  alt={card.image?.alt}
                  className="rounded-sm"
                  width={card.image?.width}
                  height={card.image?.height}
                  placeholder={card.image?.blurDataURL && "blur"}
                  blurDataURL={card.image?.blurDataURL}
                />
                <h2>{card.title}</h2>
                <h3>{card.subtitle}</h3>
              </div>
              <div className="">
                <p>{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
