import { groq } from "next-sanity";
import { MODULE_HERO } from "./hero";
import { MODULE_SLIDING_INFO_CARDS } from "./slidingInfoCards";
import { MODULE_SHOP_SECTION } from "./shopSection";
import { MODULE_NUMBERED_INFO_LIST } from "./numberedInfoList";
import { MODULE_EVENTS } from "./events";
import { MODULE_IMAGE_WITH_TEXT } from "./imageWithText";
import { MODULE_SLICK_SLIDER } from "./slickSlider";
import { MODULE_SKEWED_IMAGES_WITH_TEXT } from "./skewedImagesWithText";
import { MODULE_INSTAGRAM_FEED_COMPONENT } from "./instagramFeedComponent";
import { MODULE_ACCORDION_LIST } from "./accordionList";
import { MODULE_PROJECTS } from "./projects";

export const MODULES_DEFINITION = groq`
  _key,
  _type,
  (_type == "module.hero") => {
    ${MODULE_HERO}
  },
  (_type == "module.slidingInfoCards") => {
    ${MODULE_SLIDING_INFO_CARDS}
  },
  (_type == "module.shopSection") => {
    ${MODULE_SHOP_SECTION}
  },
  (_type == "module.numberedInfoList") => {
    ${MODULE_NUMBERED_INFO_LIST}
  },
  (_type == "module.events") => {
    ${MODULE_EVENTS}
  },
  (_type == "module.projects") => {
    ${MODULE_PROJECTS}
  },
  (_type == "module.imageWithText") => {
    ${MODULE_IMAGE_WITH_TEXT}
  },
  (_type == "module.slickSlider") => {
    ${MODULE_SLICK_SLIDER}
  },
  (_type == "module.skewedImagesWithText") => {
    ${MODULE_SKEWED_IMAGES_WITH_TEXT}
  },
   (_type == "module.instagramFeedComponent") => {
    ${MODULE_INSTAGRAM_FEED_COMPONENT}
  },
   (_type == "module.accordionList") => {
    ${MODULE_ACCORDION_LIST}
  },
`;

export const MODULES = groq`
  "modules": template->modules[] {
    ${MODULES_DEFINITION}
  }
`;
