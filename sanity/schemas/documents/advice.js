import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "advice",
  type: "document",
  title: "Advice",
  fields: [
    defineField({
      name: "adviceNumber",
      type: "number",
      title: "Advice #",
      validation: (Rule) => Rule.required(),
    }),
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
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
      rows: 3,
    }),
    //tags
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    //add article banner image
    defineField({
      name: "bannerImage",
      type: "image",
      title: "Banner Image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "bannerImage",
    },
    prepare(selection) {
      const { title, image } = selection;
      return {
        title,
        media: image || DocumentIcon,
      };
    },
  },
});
