"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BorderLines from "../BorderLines";

function SubMenu(props) {
  return (
    <div className="submenu flex flex-col gap-6 px-4 pb-6 bg-darkGreen">
      {props.subMenu.map((subMenuItem, i) => {
        const [subHoverRef, isSubHovered] = useHover();
        return (
          <Link
            key={i}
            ref={subHoverRef}
            className="text-lightBeige hover:text-orangeAccent"
            href={subMenuItem.link}
          >
            <div className="relative">
              {subMenuItem.title}
              {isSubHovered && (
                <>
                  <div className="absolute -bottom-2 -left-2 -right-2 bg-orangeAccent h-[1px]" />
                  <div className="absolute bottom-[-11px] -left-2 right-0 bg-orangeAccent h-[7px] w-[7px]" />
                </>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Header({ module }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [isMouseAtTop, setIsMouseAtTop] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    // Update opacity and isMouseAtTop based on scroll position
    const maxScroll = 16 * 5; // Maximum scroll position for full transparency
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

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = isMouseAtTop ? 1 : 0;

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 h-screen z-[90] pt-20 bg-darkGreen",
          !navOpen && "hidden"
        )}
      >
        <div className="flex flex-col justify-evenly h-full text-h4 max-w-[400px] px-8 text-center text-lightBeige mx-auto">
          {module?.menu?.map((menuItem, index) => (
            <Link onClick={() => setNavOpen(false)} className="w-full" href={menuItem.link}>
              {menuItem.title}
              <>
                <div className="h-[1px] w-full bg-lightBeige" />
                <div className="h-[7px] w-[7px] bg-lightBeige translate-y-[-4px]" />
              </>
            </Link>
          ))}
        </div>
      </div>
      <div
        datatype="desktop-header"
        className="hidden lg:block bg-darkGreen sticky top-0 z-[100] h-[5rem] transition-opacity duration-[500ms]"
        style={{ opacity }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex h-full items-center gap-12 justify-between max-w-[1200px] mx-auto">
          <Link href="/" className="p-4 h-full">
            <Image
              src={module.logo.url}
              width={module.logo.width}
              height={module.logo.height}
              alt={module.logo.alt}
              className="object-cover h-full w-auto"
              // placeholder={module.logo?.blurDataURL && "blur"}
              // blurDataURL={module.logo?.blurDataURL}
              priority={true}
            />
          </Link>
          <div className="flex h-full items-center">
            {module?.menu?.map((menuItem, index) => {
              const [hoverRef, isHovered] = useHover();
              return (
                <div ref={hoverRef} className="h-full relative">
                  <Link
                    key={index}
                    className={clsx(
                      "flex flex-col h-full justify-center p-4",
                      isHovered ? "text-orangeAccent" : "text-lightBeige"
                    )}
                    href={menuItem.link}
                  >
                    <div className="relative">
                      {menuItem.title}
                      {isHovered && (
                        <>
                          <div className="absolute -bottom-2 -left-2 -right-2 bg-orangeAccent h-[1px]" />
                          <div className="absolute bottom-[-11px] -left-2 right-0 bg-orangeAccent h-[7px] w-[7px]" />
                        </>
                      )}
                    </div>
                  </Link>
                  {isHovered && menuItem.subMenu && (
                    <div
                      className={clsx(
                        "absolute top-full left-0 right-0 flex flex-col transition-all duration-300",
                        isHovered ? "opacity-1 h-full delay-[50ms]" : "opacity-0 h-0"
                      )}
                    >
                      <SubMenu subMenu={menuItem.subMenu} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        datatype="mobile-header"
        className="lg:hidden bg-darkGreen sticky top-0 z-[100] h-[5rem] transition-opacity duration-[500ms] relative"
      >
        <div className="flex h-full items-center gap-12 justify-between max-w-[1200px] mx-auto">
          <Link href="/" className="p-4 h-full">
            <Image
              src={module.logo.url}
              width={module.logo.width}
              height={module.logo.height}
              alt={module.logo.alt}
              className="object-cover h-full w-auto"
              // placeholder={module.logo?.blurDataURL && "blur"}
              // blurDataURL={module.logo?.blurDataURL}
              priority={true}
            />
          </Link>
          <div className="h-1/2 m-4 box-content relative" onClick={() => setNavOpen(!navOpen)}>
            <svg
              width="auto"
              height="auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(
                "transition-opacity duration-150",
                navOpen ? "opacity-0" : "opacity-1"
              )}
            >
              <rect x="0.5" y="0.5" width="59" height="59" rx="2.5" stroke="#F9F4E8" />
              <rect x="11.1113" y="13.2002" width="38.8889" height="6" rx="3" fill="#F9F4E8" />
              <rect x="11.1113" y="26.3999" width="38.8889" height="6" rx="3" fill="#F9F4E8" />
              <rect x="11.1113" y="39.6001" width="38.8889" height="6" rx="3" fill="#F9F4E8" />
            </svg>
            <svg
              width="auto"
              height="auto"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(
                "absolute z-10 inset-0 transition-opacity duration-150",
                navOpen ? "opacity-1" : "opacity-0"
              )}
            >
              <rect x="0.5" y="0.5" width="59" height="59" rx="2.5" stroke="#F9F4E8" />
              <rect
                x="16"
                y="40.7485"
                width="35"
                height="5"
                rx="2.5"
                transform="rotate(-45 16 40.7485)"
                fill="#F9F4E8"
              />
              <rect
                x="19.5356"
                y="16"
                width="35"
                height="5"
                rx="2.5"
                transform="rotate(45 19.5356 16)"
                fill="#F9F4E8"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
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
