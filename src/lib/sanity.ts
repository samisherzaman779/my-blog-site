import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "2pigjlfd",
  dataset: "production",
  apiVersion: "2025-07-21",
  useCdn: true,
});

export const writeClient = createClient({
  projectId: "2pigjlfd",
  dataset: "production",
  apiVersion: "2025-07-21",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
