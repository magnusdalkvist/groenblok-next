import { CalendarIcon, DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "This is used to generate the page URL",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Date",
      initialValue: () => new Date().toISOString().substring(0, 10),
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title,
        subtitle: new Date(date).toLocaleDateString("da-DK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        media: CalendarIcon,
      };
    },
  },
});
