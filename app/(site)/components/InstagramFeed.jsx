"use client";
import { useEffect } from "react";
import Instafeed from "instafeed.js";

export default function InstagramFeed({ instafeedConfig }) {
  useEffect(() => {
    const instafeedTarget = document.getElementById("instafeed-container");
    if (instafeedTarget) {
      instafeedConfig.target = instafeedTarget;
      new Instafeed(instafeedConfig).run();
    }
  }, []);

  return <div id="instafeed-container" className="instagram-feed"></div>;
}
