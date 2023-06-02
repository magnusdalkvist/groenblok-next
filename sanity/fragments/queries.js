import { MODULES } from "./modules";
import { groq } from "next-sanity";
import { IMAGE } from "./image";
import { MODULE_FOOTER } from "./modules/footer";

export const HOME_QUERY_SANITY = groq`
*[_type == 'home'][0] {
  title,
  ${MODULES},
}
`;

export const MAGAZINE_QUERY_SANITY = groq`
{
    "articles": *[_type=="article"]{
      ...,
      bannerImage {
        ${IMAGE}
      }
    },
    "videos": *[_type=="video"]{
      ...,
      bannerImage {
        ${IMAGE}
      }
    },
    "podcasts": *[_type=="podcast"]{
      ...,
      bannerImage {
        ${IMAGE}
      }
    },
    "reports": *[_type=="report"]{
      ...,
      bannerImage {
        ${IMAGE}
      }
    },
    "advice": *[_type=="advice"]{
      ...,
      bannerImage {
        ${IMAGE}
      }
    }
}
`;

export const PAGE_QUERY_SANITY = groq`
*[_type == 'page' && slug.current == $slug ][0] {
  title,
  ${MODULES},
  blocks[] {
    ...,
  },
}
`;

export const ADVICE_QUERY_SANITY = groq`
*[_type == "advice" && slug.current == $slug][0] {
  ...,
  content[]{
    ...,
    "bannerImage": bannerImage {
      ${IMAGE}
    }
  }
}`;

export const ARTICLES_QUERY_SANITY = groq`
*[_type == "article"][] {
  ...,
  "bannerImage": bannerImage {
    ${IMAGE}
  }
}`;

export const EVENTS_QUERY_SANITY = groq`
*[_type == "event"][] {
  ...,
    "image": image {
      ${IMAGE}
    }
}`;

export const EVENT_QUERY_SANITY = groq`
*[_type == "event" && slug.current == $slug][0] {
  ...,
    "image": image {
      ${IMAGE}
    }
}`;

export const PROJECTS_QUERY_SANITY = groq`
*[_type == "project"][] {
  ...,
    "image": image {
      ${IMAGE}
    }
}`;

export const PROJECT_QUERY_SANITY = groq`
*[_type == "project" && slug.current == $slug][0] {
  ...,
    "image": image {
      ${IMAGE}
    }
}`;

export const SETTINGS_QUERY_SANITY = groq`
*[_type == "settings"][0] {
  ...,
  headerTemplate->{
    ...,
    modules[]{
      ...,
      "logo": logo {
        ${IMAGE}
      },
    }
  },
  footerTemplate->{
    ...,
    modules[]{
      ${MODULE_FOOTER}
    },
  },
}`;
