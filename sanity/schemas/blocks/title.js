import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'block.title',
  title: 'Title',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Title',
        media: BulbOutlineIcon,
      }
    },
  },
})
