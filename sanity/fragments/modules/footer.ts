import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_FOOTER = groq`
  _key,
  _type,
  adresse, 
  email,
  cvr,
  image {
      ${IMAGE}
    },
`;
