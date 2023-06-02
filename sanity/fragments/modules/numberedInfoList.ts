import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_NUMBERED_INFO_LIST = groq`
  _key,
  _type,
  infoList[] {
    content[]{
    ...,
    "bannerImage": bannerImage {
      ${IMAGE}
    }
  }
  },
`;
