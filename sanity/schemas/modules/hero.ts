import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.hero",
  title: "Hero",
  type: "object",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [{ type: "block.title" }, { type: "block.copy" }, { type: "block.buttonGroup" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "grundprincipper",
      title: "Grundprincipper",
      type: "array",
      of: [
        defineField({
          name: "grundprincip",
          title: "Grundprincip",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "content",
              type: "array",
              title: "Content",
              of: [{ type: "block.title" }, { type: "block.copy" }, { type: "block.buttonGroup" }],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "blocks",
    },
    prepare({ title }) {
      return {
        title: title[0].title || title[0].content[0].children[0].text,
        subtitle: "Hero",
        media: BulbOutlineIcon,
      };
    },
  },
});
