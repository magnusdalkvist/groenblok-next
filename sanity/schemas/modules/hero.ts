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
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "Quote", value: "blockquote" },
                  ],
                },
              ],
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
      title: "blocks.0.title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Hero",
        media: BulbOutlineIcon,
      };
    },
  },
});
