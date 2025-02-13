/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/admin/[[...index]].tsx` route
 */

import { codeInput } from "@sanity/code-input";
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from "@sanity/dashboard";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { vercelWidget } from "sanity-plugin-dashboard-widget-vercel";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

import { env } from "@/env";
import { previewDocumentNode } from "@/sanity/plugins/previewPane";
import { productionUrl } from "@/sanity/plugins/productionUrl";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "@/sanity/sanity.api";
import { authorSchema } from "@/sanity/schemas/documents/author.schema";
import { blogPostSchema } from "@/sanity/schemas/documents/blog-post.schema";
import { categorySchema } from "@/sanity/schemas/documents/category.schema";
import { aboutSchema } from "@/sanity/schemas/singletons/about.schema";
import { homeSchema } from "@/sanity/schemas/singletons/home.schema";

const singletonSchemas = [homeSchema, aboutSchema];
const documentSchemas = [blogPostSchema, authorSchema, categorySchema];

const singletonSchemaNames: string[] = [
  homeSchema.name,
  aboutSchema.name,
  "media.tag",
];

export const PREVIEWABLE_DOCUMENT_TYPES = singletonSchemaNames;

export default defineConfig({
  basePath: "/admin",
  projectId: projectId || "",
  dataset: dataset || "",
  title: env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  schema: {
    // If you want more content types, you can add them to this array
    types: [...singletonSchemas, ...documentSchemas],
  },
  plugins: [
    structureTool({
      structure: pageStructure([...singletonSchemas]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Vercel Deploy Dashboard
    dashboardTool({
      widgets: [vercelWidget(), projectInfoWidget(), projectUsersWidget()],
    }),
    // Image asset management
    media(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // Code block plugin
    codeInput(),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin(singletonSchemaNames),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
  ],
});
