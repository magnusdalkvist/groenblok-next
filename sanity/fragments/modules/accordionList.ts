import { groq } from "next-sanity";

export const MODULE_ACCORDION_LIST = groq`
  _key,
  _type,
  title,
  accordions[] {
    question,
    content,
  }
  
`;
