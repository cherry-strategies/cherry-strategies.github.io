import type { Collection } from "tinacms";

const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "site",
      label: "Site settings",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site title",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Site description",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "menu",
      label: "Main menu",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title,
          };
        },
      },
      fields: [
        {
          name: "title",
          label: "Name",
          type: "string",
          required: true,
        },
        {
          name: "url",
          label: "URL",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "connnect",
      label: "Contact links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.service,
          };
        },
      },
      fields: [
        {
          name: "platform",
          label: "Name of platform",
          type: "string",
        },
        {
          name: "url",
          label: "Link",
          type: "string",
        },
        {
          name: "title",
          label: "Link text",
          type: "string",
        },
      ],
    },
  ],
};

export default GlobalConfigCollection;
