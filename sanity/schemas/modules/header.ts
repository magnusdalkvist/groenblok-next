import { BulbOutlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.header",
  title: "Header",
  type: "object",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "array",
      of: [
        defineField({
          name: "menuItem",
          title: "Menu Item",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "subMenu",
              title: "Sub Menu",
              type: "array",
              of: [
                defineField({
                  name: "subMenuItem",
                  title: "Sub Menu Item",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "link",
                      title: "Link",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
        media: BulbOutlineIcon,
      };
    },
  },
});
