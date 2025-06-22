import {ImageIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const imageComponentType = defineType({
  name: 'imageComponent',
  title: 'Image Component',
  type: 'document',
  icon: ImageIcon,
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
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      initialValue: 800,
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      initialValue: 600,
    }),
    defineField({
      name: 'priority',
      title: 'Priority Loading',
      type: 'boolean',
      description: 'Enable for above-the-fold images to improve LCP.',
      initialValue: false,
    }),
  ],
})
