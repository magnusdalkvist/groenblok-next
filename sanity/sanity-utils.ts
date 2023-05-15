import { createClient } from "next-sanity";
import {
  ARTICLE_QUERY_SANITY,
  EVENT_QUERY_SANITY,
  HOME_QUERY_SANITY,
  PAGE_QUERY_SANITY,
} from "./queries";

export const client = createClient({
  projectId: "at6buhh6",
  dataset: "production",
  apiVersion: "2023-05-14",
  useCdn: true,
});

export async function getArticle(slug) {
  const query = ARTICLE_QUERY_SANITY;
  const params = {
    slug,
  };
  const article = await client.fetch(query, params);
  if (!article) {
    return null;
  }
  return article;
}

export async function getHome() {
  const query = HOME_QUERY_SANITY;
  const params = {};
  const home = await client.fetch(query, params);
  if (!home) {
    return null;
  }
  return home;
}

export async function getPage(slug) {
  const query = PAGE_QUERY_SANITY;
  const params = {
    slug,
  };
  const page = await client.fetch(query, params);
  if (!page) {
    return null;
  }
  return page;
}

export async function getEvents() {
  const query = EVENT_QUERY_SANITY;
  const params = {};
  const event = await client.fetch(query, params);
  if (!event) {
    return null;
  }
  return event;
}
