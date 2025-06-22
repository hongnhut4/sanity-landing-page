import {ImagesIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export const carouselType = defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
                accept: 'image/*,.avif,.webp,.jpg,.jpeg,.png,.gif'
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
            defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'autoPlay',
      title: 'Auto Play',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'interval',
      title: 'Auto Play Interval (ms)',
      type: 'number',
      initialValue: 5000,
    }),
  ],
})
