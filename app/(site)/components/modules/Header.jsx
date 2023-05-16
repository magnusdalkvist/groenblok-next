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
    <div className="fixed top-0 z-10 w-full p-5 flex justify-between items-start" datatype="header">
      <div
        className={clsx(
          "bg-white flex items-center transition-all duration-300 justify-center",
          scrollPosition > 100 && !isClicked ? "w-10 h-10 delay-300" : "w-[100px] h-[100px]"
        )}
      >
        <Image
          src={module.logo.url}
          width={module.logo.width}
          height={module.logo.height}
          className="object-cover h-full w-full"
          placeholder="blur"
          blurDataURL={module?.logo?.blurDataURL}
          priority={true}
        />
      </div>
      <div className="hidden md:flex justify-end">
        <div
          onClick={() => setIsClicked(true)}
          className={clsx(
            "flex relative transition-all duration-300 overflow-hidden",
            scrollPosition > 100 && !isClicked ? "w-10 delay-300" : "w-full"
          )}
        >
          <div
            className={clsx(
              "transition-all z-10 h-10 duration-300 cursor-pointer absolute inset-0 bg-white flex justify-center items-center",
              scrollPosition > 100 && !isClicked
                ? "opacity-1"
                : "opacity-0 pointer-events-none delay-300"
            )}
          >
            ☰
          </div>
          {module?.menu?.map((menuItem, index) => {
            const [hoverRef, isHovered] = useHover();
            return (
              <div className="flex flex-col" key={index} ref={hoverRef}>
                <Link
                  ref={hoverRef}
                  className="px-4 text-center py-2 min-w-[100px] bg-white hover:bg-black hover:text-white relative"
                  href={menuItem.link}
                >
                  {menuItem.title}
                </Link>
                <div
                  className={clsx(
                    "flex flex-col transition-all duration-300",
                    isHovered ? "opacity-1 h-full delay-[50ms]" : "opacity-0 h-0"
                  )}
                >
                  {menuItem?.subMenu?.map((subMenuItem, index) => (
                    <Link
                      className="px-4 text-center py-2 bg-white hover:bg-black hover:text-white relative"
                      href={subMenuItem.link}
                      key={index}
                    >
                      {subMenuItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={clsx(
          "md:hidden cursor-pointer bg-white flex justify-center items-center w-10 h-10"
        )}
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? "X" : "☰"}
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
