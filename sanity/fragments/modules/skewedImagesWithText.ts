import { groq } from "next-sanity";

export const MODULE_SKEWED_IMAGES_WITH_TEXT = groq`
  _key,
  _type,
  title,
  content[]{
    ...,
  },
`;
