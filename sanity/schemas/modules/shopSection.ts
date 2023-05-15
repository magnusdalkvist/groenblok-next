import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.shopSection',
  title: 'Shop Section',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('You must add a title'),
    }),
    defineField({
      name: 'imageButtons',
      title: 'Image Buttons',
      type: 'array',
      of: [
        defineField({
          name: 'imageButton',
          title: 'Image Button',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('You must add a title'),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (Rule) => Rule.required().error('You must add a link'),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Shop Section',
        media: BulbOutlineIcon,
      }
    },
  },
})
