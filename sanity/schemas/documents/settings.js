import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    defineField({
      name: 'headerTemplate',
      type: 'reference',
      title: 'Header template',
      to: [{type: 'template'}],
      options: {
        disableNew: true,
        filter: () => {
          return {
            filter: `type == $type`,
            params: {
              type: 'header',
            },
          }
        },
      },
    }),
    defineField({
      name: 'footerTemplate',
      title: 'Footer template',
      type: 'reference',
      to: {type: 'template'},
      options: {
        disableNew: true,
        filter: () => {
          return {
            filter: `type == $type`,
            params: {
              type: 'footer',
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
        media: UserIcon,
      }
    },
  },
})
