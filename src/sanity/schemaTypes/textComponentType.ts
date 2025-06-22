import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const textComponentType = defineType({
  name: 'textComponent',
  title: 'Text Component',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Text Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Heading', value: 'heading'},
          {title: 'Subheading', value: 'subheading'},
          {title: 'Body', value: 'body'},
          {title: 'Caption', value: 'caption'},
        ],
      },
      initialValue: 'body',
    }),
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'left',
    }),
  ],
})
