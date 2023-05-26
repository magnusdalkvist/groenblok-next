import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [{ type: "block.title" }, { type: "block.copy" }, { type: "block.buttonGroup" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "template",
      type: "reference",
      title: "Page Template",
      to: [{ type: "template" }],
      options: {
        filter: () => {
          return {
            filter: `type == $type`,
            params: {
              type: "page",
            },
          };
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: "/" + subtitle,
        media: DocumentIcon,
      };
    },
  },
});
