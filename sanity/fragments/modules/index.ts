import { groq } from "next-sanity";
import { MODULE_HERO } from "./hero";
import { MODULE_SLIDING_INFO_CARDS } from "./slidingInfoCards";
import { MODULE_SHOP_SECTION } from "./shopSection";
import { MODULE_NUMBERED_INFO_LIST } from "./numberedInfoList";
import { MODULE_EVENTS } from "./events";
import { MODULE_IMAGE_WITH_TEXT } from "./imageWithText";

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
  (_type == "module.imageWithText") => {
    ${MODULE_IMAGE_WITH_TEXT}
  },
`;

export const MODULES = groq`
  "modules": template->modules[] {
    ${MODULES_DEFINITION}
  }
`;
