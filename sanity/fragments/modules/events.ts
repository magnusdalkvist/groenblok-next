import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_EVENTS = groq`
  _key,
  _type,
  title,
  show,
  events[]->{
    ...,
    "image": image {
      ${IMAGE}
    }
  }
`;
