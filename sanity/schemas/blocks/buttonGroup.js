import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'block.buttonGroup',
  title: 'Button group',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [
        defineField({
          name: 'button',
          type: 'object',
          title: 'Button',
          fields: [
            defineField({
              name: 'text',
              type: 'string',
              title: 'Text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'url',
              title: 'Link',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      buttons: 'buttons',
    },
    prepare({buttons}) {
      const length = Object.keys(buttons).length
      //subtitle should be pluralized if more than one button

      return {
        title: 'Button group',
        subtitle: `${length} button${length > 1 ? 's' : ''}`,
        media: BulbOutlineIcon,
      }
    },
  },
})
