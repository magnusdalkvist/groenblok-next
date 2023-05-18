import { createClient } from "next-sanity";
import clientConfig from "./config/client-config";

import {
  ARTICLE_QUERY_SANITY,
  EVENT_QUERY_SANITY,
  HOME_QUERY_SANITY,
  PAGE_QUERY_SANITY,
  SETTINGS_QUERY_SANITY,
} from "./queries";

export async function getArticle(slug) {
  const query = ARTICLE_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
    slug,
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getHome() {
  const query = HOME_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getSanitySettings() {
  const query = SETTINGS_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getPage(slug) {
  const query = PAGE_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
    slug,
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getEvents() {
  const query = EVENT_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
  };
  return createClient(clientConfig).fetch(query, params);
}
