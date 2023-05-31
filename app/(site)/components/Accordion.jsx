"use client";
import clsx from "clsx";
import { useState } from "react";

export default function Accordion({ title, children, className }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={className}>
      <div
        className="flex mb-4 justify-between items-center w-full text-[30px] relative cursor-pointer gap-4"
        onClick={toggle}
      >
        <p>{title}</p>
        <svg
          className={clsx(
            "w-8 h-4 transition-all duration-150",
            isShowing && "transform rotate-180"
          )}
          width="40"
          height="23"
          viewBox="0 0 40 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9828 22.0203C19.0985 23.1361 20.9104 23.1361 22.0261 22.0203L39.1632 4.88074C40.2789 3.76489 40.2789 1.95274 39.1632 0.83689C38.0475 -0.278963 36.2356 -0.278963 35.1199 0.83689L20 15.9589L4.88006 0.845816C3.76436 -0.270037 1.95247 -0.270037 0.836773 0.845816C-0.278924 1.96167 -0.278924 3.77382 0.836773 4.88967L17.9739 22.0292L17.9828 22.0203Z"
            fill="#12471E"
          />
        </svg>
      </div>
      <div className={clsx(isShowing ? "block" : "hidden")}>{children}</div>
    </div>
  );
}
