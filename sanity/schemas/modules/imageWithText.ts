import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.imageWithText",
  title: "Image With Text",
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
      name: "leftImage",
      title: "Left Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Left image with right text",
        media: BulbOutlineIcon,
      };
    },
  },
});
