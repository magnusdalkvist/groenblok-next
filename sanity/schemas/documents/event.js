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
    defineField({
      title: "Location",
      name: "location",
      type: "geopoint",
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
