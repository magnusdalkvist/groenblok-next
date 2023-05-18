import header from "./modules/header";
import footer from "./modules/footer";
import hero from "./modules/hero";
import slidingInfoCards from "./modules/slidingInfoCards";
import events from "./modules/events";
import latestArticles from "./modules/latestArticles";
import numberedInfoList from "./modules/numberedInfoList";
import imageGallery from "./modules/imageGallery";
import shopSection from "./modules/shopSection";
import imageWithText from "./modules/imageWithText";
const modules = [
  header,
  footer,
  hero,
  slidingInfoCards,
  events,
  latestArticles,
  numberedInfoList,
  imageGallery,
  shopSection,
  imageWithText,
];

import articles from "./documents/article";
import authors from "./documents/author";
import categories from "./documents/category";
import settings from "./documents/settings";
import home from "./documents/home";
import template from "./documents/template";
import page from "./documents/page";
import event from "./documents/event";
const documents = [articles, authors, categories, settings, home, template, page, event];

import buttonGroup from "./blocks/buttonGroup";
import copy from "./blocks/copy";
import title from "./blocks/title";
const blocks = [buttonGroup, copy, title];

export const schemaTypes = [...documents, ...modules, ...blocks];
