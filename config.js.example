import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const tinaClient =
  "ea0fd6b0-29c8-4de1-a222-9b344c401363" || process.env.TINA_CLIENT;
const tinaToken =
  "25c2ccc791f9176d7b3207c35ee066482bd6da34" || process.env.TINA_TOKEN;

export default defineConfig({
  branch,
  clientId: tinaClient,
  token: tinaToken,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        defaultItem: () => {
          return {
            draft: false,
            tags: ["post"],
          };
        },
        name: "blog",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            default: false,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            description: "A short summary of the post",
            required: false,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            description: "The author of the post",
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Date",
            description: "The date of the post",
            ui: {
              dateFormat: "YYYY MM DD",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            description: "The tags of the post",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            description: "The image of the post",
          },

          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt",
            description: "The alt text of the post image",
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
