import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  type: "document",
  title: "Video",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: "url",
      type: "url",
      title: "Youtube URL",
      validation: (Rule) => Rule.required(),
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
