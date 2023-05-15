import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { myStructure } from "./deskStructure";
import { schemaTypes } from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";

const config = defineConfig({
  projectId: "at6buhh6",
  dataset: "production",
  apiVersion: "2023-05-14",
  useCdn: true,
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default config;
