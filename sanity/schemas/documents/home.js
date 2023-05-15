import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'template',
      title: 'Template',
      type: 'reference',
      to: {type: 'template'},
      options: {
        disableNew: true,
        filter: ({document}) => {
          if (!document.locale) return {}

          return {
            filter: `type == $type && locale == $locale`,
            params: {
              type: 'home',
              locale: document.locale,
            },
          }
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title,
        media: HomeIcon,
      }
    },
  },
})
