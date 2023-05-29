import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { myStructure } from "./deskStructure";
import { schemaTypes } from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { googleMapsInput } from "@sanity/google-maps-input";

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
    googleMapsInput({
      apiKey: "AIzaSyAi6iHK9vAwe4CdRrIKdn-Ke1PN8gf3oSQ",
      defaultZoom: 11,
      defaultLocation: {
        lat: 55.675687,
        lng: 12.567796,
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default config;
