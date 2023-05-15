import { groq } from "next-sanity";

export const IMAGE = groq`
  "alt": asset->altText,
  "blurDataURL": asset->metadata.lqip,
  'height': asset->metadata.dimensions.height,
  'url': asset->url,
  'width': asset->metadata.dimensions.width,
`;
