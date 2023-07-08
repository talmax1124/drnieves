import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  "master" || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF;

const tinaClient =
  "2b333a57-74f3-408e-8429-cf45c2f61392" || process.env.TINA_CLIENT;
const tinaToken =
  "fef539c91bacf7dc7f14ef1e03355b00f77ae49f" || process.env.TINA_TOKEN;

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
            date: new Date().toISOString(),
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
      {
        name: "reviews",
        label: "Reviews",
        path: "src/content/reviews",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "The title of the review",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            description: "The author of the review",
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "src/content/about",
        fields: [
          {
            type: "string",
            name: "staff",
            label: "Staff",
            description: "The staff member",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            description: "The title of the staff member",
          },
          {
            type: "string",
            name: "biography",
            label: "Biography",
            description: "The biography of the staff member",
          },

          {
            type: "image",
            name: "image",
            label: "Image",
            description: "The image of the staff member",
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt",
            description: "The alt text of the staff member image",
          },
        ],
      },
    ],
  },
});
