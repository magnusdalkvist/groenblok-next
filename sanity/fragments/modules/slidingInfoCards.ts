import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_SLIDING_INFO_CARDS = groq`
  _key,
  _type,
  title,
  cards[] {
    _key,
    _type,
    title,
    subtitle,
    description,
    "image": image {
      ...,
      ${IMAGE}
    },
  },
"backgroundImage": backgroundImage {
    ${IMAGE}
  },
`;
