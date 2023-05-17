import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.footer",
  title: "Footer",
  type: "object",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "adresse",
      title: "Adresse",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cvr",
      title: "CVR",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Footer",
        media: BulbOutlineIcon,
      };
    },
  },
});
