"use client";
import { useEffect } from "react";
import Instafeed from "instafeed.js";

export default function InstagramFeed() {
  useEffect(() => {
    const accessToken =
      "IGQVJVU3ZACai1aN2FkT1ZAuNlo1VUF6QXphc1lReklNXzMycWxOZAG5PN1ZAWMWt0dnpmS24zeVVIWUs2M1A1UGl1VFU5ajNXT1d2N3llTDJJdmk0N29SN2JTeHhZARm81SXdWX00zLXFBLWVaSUN6Y0N4egZDZD";
    const instafeedConfig = {
      get: "user",
      resolution: "low_resolution",
      accessToken: accessToken,
      limit: 3,
    };
    const instafeedTarget = document.getElementById("instafeed-container");
    if (instafeedTarget) {
      instafeedConfig.target = instafeedTarget;
      new Instafeed(instafeedConfig).run();
    }
  }, []);

  return <div id="instafeed-container" className="instagram-feed"></div>;
}
