import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_IMAGE_WITH_TEXT = groq`
  _key,
  _type,
  title,
  text,
  "leftImage": leftImage {
    ${IMAGE}
  },
`;
