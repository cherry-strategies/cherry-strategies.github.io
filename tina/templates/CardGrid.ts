import type { Template } from "tinacms";

const CardGridTemplate: Template = {
  name: "card_grid",
  label: "Card Grid",
  fields: [
    {
      type: "object",
      name: "items",
      label: "Card",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "rich-text",
          name: "children",
          label: "Content",
        },
      ],
    },
  ],
};

export default CardGridTemplate;
