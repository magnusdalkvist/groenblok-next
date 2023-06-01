"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function SlidingInfoCards({ module }) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <div className="p-24 pb-40 green-gradient" datatype="slidingInfoCard">
        <h2 className="text-orangeAccent font-black tracking-wide pt-28">{module?.title}</h2>
        <div className="infoCardsWrapper pt-28 pb-40 px-0 relative">
          {module?.cards.map((card, i) => {
            const isActiveCard = i === activeCard;
            const cardClass = clsx("infoCard", isActiveCard && "active");

            return (
              <>
                <div class="flip-card rounded">
                  <div class="flip-card-inner">
                    <div class="flip-card-front rounded">
                      <h3 className="absolute z-10 bottom-[-50px] text-orangeAccent">
                        {card.title}
                      </h3>
                      <Image
                        src={card.image?.url}
                        alt={card.image?.alt}
                        width={card.image?.width}
                        height={card.image?.height}
                        className="relative rounded aspect-square object-cover"
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

                {/* <div key={i} className={cardClass}>
                  <div className="flex flex-col">
                    <div class="infoCardContainer">
                      <div class="card">
                        <div class="slide slide1">
                          <div class="content" className="absolute">
                            <h3 className="">{card.title}</h3>
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
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
