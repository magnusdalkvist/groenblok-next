import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.projects",
  title: "Projects",
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
      name: "show",
      title: "Show",
      type: "string",
      options: {
        list: [
          { title: "Previous Projects", value: "previous" },
          { title: "Future Projects", value: "future" },
          { title: "Custom List", value: "custom" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      hidden: ({ parent }) => parent?.show !== "custom",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Projects",
        media: BulbOutlineIcon,
      };
    },
  },
});
