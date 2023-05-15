import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.numberedInfoList',
  title: 'Numbered Info List',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'infoList',
      title: 'Info List',
      type: 'array',
      of: [
        defineField({
          name: 'infoListItem',
          title: 'Info List Item',
          type: 'object',
          fields: [
            defineField({
              name: 'blocks',
              title: 'Blocks',
              type: 'array',
              of: [{type: 'block.title'}, {type: 'block.copy'}, {type: 'block.buttonGroup'}],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'blocks.0.text',
            },
            prepare({title}) {
              return {
                title,
                subtitle: 'Info List Item',
                media: BulbOutlineIcon,
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      list: 'infoList',
    },
    prepare({list}) {
      const length = Object.keys(list).length
      return {
        title: 'Numbered Info List',
        subtitle: `${length} item${length === 1 ? '' : 's'}`,
        media: BulbOutlineIcon,
      }
    },
  },
})
