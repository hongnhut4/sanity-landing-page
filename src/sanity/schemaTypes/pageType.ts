import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'navigation',
          title: 'Navigation Section',
          type: 'reference',
          to: [{ type: 'navigation' }]
        }),
        defineArrayMember({
          name: 'carousel',
          title: 'Carousel Section',
          type: 'reference',
          to: [{ type: 'carousel' }]
        }),
        defineArrayMember({
          name: 'textSection',
          title: 'Text Section',
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'content', type: 'text', title: 'Content' }),
            defineField({
              name: 'variant',
              type: 'string',
              title: 'Style Variant',
              options: {
                list: ['heading', 'subheading', 'body', 'caption']
              }
            }),
            defineField({
              name: 'alignment',
              type: 'string',
              title: 'Text Alignment',
              options: {
                list: ['left', 'center', 'right']
              }
            })
          ]
        }),
        defineArrayMember({
          name: 'imageSection',
          title: 'Image Section',
          type: 'object',
          fields: [
            defineField({ name: 'image', type: 'image', title: 'Image' }),
            defineField({ name: 'alt', type: 'string', title: 'Alt Text' })
          ]
        }),
        defineArrayMember({
          name: 'imageTextSection',
          title: 'Image & Text Section',
          type: 'object',
          fields: [
            defineField({ name: 'image', type: 'image', title: 'Image' }),
            defineField({ name: 'alt', type: 'string', title: 'Alt Text' }),
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'content', type: 'text', title: 'Content' }),
            defineField({
              name: 'layout',
              type: 'string',
              title: 'Layout',
              options: {
                list: ['image-left', 'image-right']
              }
            })
          ]
        }),
        defineArrayMember({
          name: 'footer',
          title: 'Footer Section',
          type: 'reference',
          to: [{ type: 'footer' }]
        })
      ]
    })
  ]
})
