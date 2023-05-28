import { createClient } from "next-sanity";
import clientConfig from "./config/client-config";

import {
  ARTICLES_QUERY_SANITY,
  ADVICE_QUERY_SANITY,
  EVENT_QUERY_SANITY,
  HOME_QUERY_SANITY,
  MAGAZINE_QUERY_SANITY,
  PAGE_QUERY_SANITY,
  PROJECT_QUERY_SANITY,
  SETTINGS_QUERY_SANITY,
  PROJECTS_QUERY_SANITY,
  EVENTS_QUERY_SANITY,
} from "./queries";

export async function getArticles() {
  const query = ARTICLES_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
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
  const query = EVENTS_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getEvent(slug) {
  const query = EVENT_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
    slug,
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getProjects() {
  const query = PROJECTS_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getProject(slug) {
  const query = PROJECT_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
    slug,
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getMagazine() {
  const query = MAGAZINE_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
  };
  return createClient(clientConfig).fetch(query, params);
}

export async function getAdvice(slug) {
  const query = ADVICE_QUERY_SANITY;
  const params = {
    next: { revalidate: 600 },
    slug,
  };
  return createClient(clientConfig).fetch(query, params);
}
