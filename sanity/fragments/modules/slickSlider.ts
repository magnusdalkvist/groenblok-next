import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_SLICK_SLIDER = groq`
  _key,
  _type,
  title,
  "images": images[] {
    ...,
    ${IMAGE}
  },
  `;
