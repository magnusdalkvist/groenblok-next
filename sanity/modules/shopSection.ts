import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_SHOP_SECTION = groq`
  _key,
  _type,
  title,
  imageButtons[] {
    _key,
    _type,
    "image": image {
      ${IMAGE}
    },
    title,
    link,
  },
  "backgroundImage": backgroundImage.asset->{
    ${IMAGE}
  },
  `;
