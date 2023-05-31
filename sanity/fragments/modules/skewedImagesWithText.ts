import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_SKEWED_IMAGES_WITH_TEXT = groq`
  _key,
  _type,
  title,
  blocks[] {
    ...,
  },
  images[] {
    ...,
    ${IMAGE}
  },
`;
