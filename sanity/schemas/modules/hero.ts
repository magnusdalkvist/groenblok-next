import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.hero',
  title: 'Hero',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{type: 'block.title'}, {type: 'block.copy'}, {type: 'block.buttonGroup'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'blocks.0.text',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Hero',
        media: BulbOutlineIcon,
      }
    },
  },
})
