import {SplitHorizontalIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const imageTextComponentType = defineType({
  name: 'imageTextComponent',
  title: 'Image & Text Component',
  type: 'document',
  icon: SplitHorizontalIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Image Left', value: 'image-left'},
          {title: 'Image Right', value: 'image-right'},
        ],
        layout: 'radio',
      },
      initialValue: 'image-left',
    }),
  ],
})
