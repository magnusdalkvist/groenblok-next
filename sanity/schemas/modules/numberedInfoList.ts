import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.numberedInfoList",
  title: "Numbered Info List",
  type: "object",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "infoList",
      title: "Info List",
      type: "array",
      of: [
        defineField({
          name: "infoListItem",
          title: "Info List Item",
          type: "object",
          fields: [
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
                {
                  type: "image",
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                    },
                  ],
                  options: {
                    hotspot: true,
                  },
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "content.0.children.0.text",
            },
            prepare({ title }) {
              return {
                title,
                subtitle: "Info List Item",
                media: BulbOutlineIcon,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      list: "infoList",
    },
    prepare({ list }) {
      const length = Object.keys(list).length;
      return {
        title: "Numbered Info List",
        subtitle: `${length} item${length === 1 ? "" : "s"}`,
        media: BulbOutlineIcon,
      };
    },
  },
});
