import {defineField} from 'sanity'
import {TiersIcon} from '@sanity/icons'

export default defineField({
  name: 'template',
  title: 'Template',
  type: 'document',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: ['home', 'page', 'header', 'footer'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {type: 'module.hero'},
        {type: 'module.slidingInfoCards'},
        {type: 'module.events'},
        {type: 'module.latestArticles'},
        {type: 'module.imageGallery'},
        {type: 'module.shopSection'},
        {type: 'module.numberedInfoList'},
        {type: 'module.header'},
        {type: 'module.footer'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare(selection) {
      const {title, type} = selection

      return {
        title: title,
        subtitle: type.charAt(0).toUpperCase() + type.slice(1) + ' template',
      }
    },
  },
})
