"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ module }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsClicked(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-darkGreen-75" datatype="desktop-header">
      <div className="max-w-[1200px] flex items-center justify-between p-4 h-[100px] mx-auto">
        <div className={clsx("aspect-square h-full")}>
          <Image
            src={module.logo.url}
            width={module.logo.width}
            height={module.logo.height}
            className="object-cover"
            placeholder={module.logo?.blurDataURL && "blur"}
            blurDataURL={module.logo?.blurDataURL}
            priority={true}
          />
        </div>
        <div className="flex justify-end">
          <div onClick={() => setIsClicked(true)} className={clsx("flex gap-4")}>
            {module?.menu?.map((menuItem, index) => {
              const [hoverRef, isHovered] = useHover();
              return (
                <div className="flex flex-col" key={index} ref={hoverRef}>
                  <Link ref={hoverRef} className="" href={menuItem.link}>
                    {menuItem.title}
                  </Link>
                  <div
                    className={clsx(
                      "flex flex-col transition-all duration-300",
                      isHovered ? "opacity-1 h-full delay-[50ms]" : "opacity-0 h-0"
                    )}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
