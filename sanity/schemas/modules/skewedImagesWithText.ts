import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.skewedImagesWithText",
  title: "Skewed Images With Text",
  type: "object",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("You must add a title"),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
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
        subtitle: "Skewed right images with left text",
        media: BulbOutlineIcon,
      };
    },
  },
});
