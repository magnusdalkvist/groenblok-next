import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_PROJECTS = groq`
  _key,
  _type,
  title,
  show,
  projects[]->{
    ...,
    "image": image {
      ${IMAGE}
    }
  }
`;
