import { MODULES } from "./modules";
import { groq } from "next-sanity";
import { MODULE_EVENTS } from "./modules/events";

export const HOME_QUERY_SANITY = groq`
*[_type == 'home'][0] {
  title,
  ${MODULES},
}
`;

export const PAGE_QUERY_SANITY = groq`
*[_type == 'page' && slug.current == $slug ][0] {
  title,
  ${MODULES},
}
`;

export const ARTICLE_QUERY_SANITY = groq`
*[_type == "article" && slug.current == $slug][0] {
  ...,
  content[]{
    ...,
    "image": image.asset->url,
  }
}`;

export const EVENT_QUERY_SANITY = groq`
*[_type == "event"][] {
  ${MODULE_EVENTS}
}`;
