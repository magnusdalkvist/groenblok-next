"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function SlidingInfoCards({ module }) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="bg-darkGreen p-24" datatype="slidingInfoCard">
      <h2 className="text-orangeAccent">{module?.title}</h2>
      <div className="infoCardsWrapper p-14 relative">
        {module?.cards.map((card, i) => {
          const isActiveCard = i === activeCard;
          const cardClass = clsx("infoCard", isActiveCard && "active");

          return (
            <div key={i} className={cardClass}>
              <div className="flex flex-col">
                <div class="infoCardContainer">
                  <div class="card">
                    <div class="slide slide1">
                      <div class="content" className="absolute">
                        <h3>{card.title}</h3>
                        <Image
                          src={card.image?.url}
                          alt={card.image?.alt}
                          width={card.image?.width}
                          height={card.image?.height}
                          className="rounded-sm relative aspect-square object-cover"
                          placeholder={card.image?.blurDataURL && "blur"}
                          blurDataURL={card.image?.blurDataURL}
                        />
                      </div>
                    </div>
                    <div class="slide slide2">
                      <div class="content">
                        <h4 className="text-orangeAccent">{card.subtitle}</h4>
                        <p className="text-lightBeige">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
