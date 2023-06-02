"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function SlidingInfoCards({ module }) {
  return (
    <>
      <div className="p-24 pb-40 green-gradient" datatype="slidingInfoCard">
        <h2 className="text-orangeAccent font-black tracking-wide pt-28">{module?.title}</h2>
        <div className="infoCardsWrapper pt-28 pb-40 px-0 relative">
          {module?.cards.map((card, i) => {
            return (
              <>
                <div className="h-full">
                  <div key={i} class="flip-card rounded">
                    <div class="flip-card-inner">
                      <div class="flip-card-front rounded">
                        <h3 className="absolute z-10 bottom-0 p-4 text-orangeAccent">
                          {card.title}
                        </h3>
                        <Image
                          src={card.image?.url}
                          alt={card.image?.alt}
                          width={card.image?.width}
                          height={card.image?.height}
                          className="relative rounded object-cover"
                          placeholder={card.image?.blurDataURL && "blur"}
                          blurDataURL={card.image?.blurDataURL}
                        />
                      </div>
                      <div class="flip-card-back p-8 rounded">
                        <h4 className="text-orangeAccent pb-2">{card.subtitle}</h4>
                        <p className="text-darkGreen p-6 pt-0">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
