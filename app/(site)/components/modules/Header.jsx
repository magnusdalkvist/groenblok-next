"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BorderLines from "../BorderLines";

export default function Header({ module }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isMouseAtTop, setIsMouseAtTop] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsClicked(false);

    // Update opacity and isMouseAtTop based on scroll position
    const maxScroll = 20; // Maximum scroll position for full transparency
    const opacity = position === 0 ? 1 : 0;
    const isMouseAtTop = opacity === 1 || position < maxScroll;
    setIsMouseAtTop(isMouseAtTop);
  };

  const handleMouseEnter = () => {
    setIsMouseAtTop(true);
  };

  const handleMouseLeave = () => {
    if (scrollPosition > 0) {
      setIsMouseAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = isMouseAtTop ? 1 : 0;
  const transitionDuration = 500; // Transition duration in milliseconds
  const navbarColor = isMouseAtTop && scrollPosition > 20 ? "bg-darkGreen" : "";

  function useHover(index) {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => {
      setValue(true);
      setActiveSubMenu(index);
    };
    const handleMouseOut = () => {
      setValue(false);
      setActiveSubMenu(null);
    };

    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, [ref.current]);

    return [ref, value];
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-${transitionDuration} ${navbarColor}`}
      datatype="desktop-header"
      style={{ opacity }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1900px] flex items-center justify-between p-4 pt-6 h-[120px] mx-auto">
        <div className={clsx("h-full")}>
          <Image
            src={module.logo.url}
            width={module.logo.width}
            height={module.logo.height}
            alt={module.logo.alt}
            className="object-cover"
            placeholder={module.logo?.blurDataURL && "blur"}
            blurDataURL={module.logo?.blurDataURL}
            priority={true}
          />
        </div>
        <div className="flex justify-end">
          <div onClick={() => setIsClicked(true)} className={clsx("flex gap-6")}>
            {module?.menu?.map((menuItem, index) => {
              const [hoverRef, isHovered] = useHover(index);
              const showSubMenu = activeSubMenu === index && menuItem.subMenu?.length > 0;
              const isMenuItemHovered = hoveredMenuItem === index;
              return (
                <div
                  className={clsx(
                    "flex flex-col relative",
                    isMenuItemHovered && "text-accentOrange" // Apply orange color to hovered menu item
                  )}
                  key={index}
                  ref={hoverRef}
                  onMouseEnter={() => setHoveredMenuItem(index)}
                  onMouseLeave={() => setHoveredMenuItem(null)}
                >
                  <Link
                    className={clsx("text-lightBeige", isMenuItemHovered && "text-orangeAccent")}
                    href={menuItem.link}
                  >
                    {menuItem.title}
                  </Link>
                  {showSubMenu && (
                    <div
                      className={clsx(
                        "absolute top-full left-0 flex flex-col transition-all duration-300",
                        isHovered ? "opacity-1 h-full delay-[50ms]" : "opacity-0 h-0"
                      )}
                    >
                      <div className="submenu flex flex-col gap-4 bg-darkGreen py-2 px-8">
                        {menuItem.subMenu.map((subMenuItem, i) => (
                          <Link
                            key={i}
                            className="text-lightBeige hover:text-orangeAccent"
                            href={subMenuItem.link}
                          >
                            {subMenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {isMenuItemHovered && (
                    <BorderLines
                      color="bg-orangeAccent"
                      side={showSubMenu ? "line-down" : "line"}
                    ></BorderLines>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]); // Recall only if ref changes
  return [ref, value];
}
