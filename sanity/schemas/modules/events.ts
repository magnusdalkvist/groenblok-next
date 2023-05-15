import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.events",
  title: "Events",
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
          { title: "Previous Events", value: "previous" },
          { title: "Future Events", value: "future" },
          { title: "Custom List", value: "custom" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      of: [{ type: "reference", to: [{ type: "event" }] }],
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
        subtitle: "Events",
        media: BulbOutlineIcon,
      };
    },
  },
});
