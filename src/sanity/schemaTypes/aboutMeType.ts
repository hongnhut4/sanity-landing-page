import { defineField, defineType } from 'sanity'

export const aboutMeType = defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url'
    }),

    defineField({
      name: 'experienceYears',
      title: 'Years of Experience',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'experienceDescription',
      title: 'Experience Description',
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              options: {
                list: [
                  'Vue.js', 'Nuxt 3', 'React.js', 'TypeScript',
                  'OutSystems', 'Flutter', 'Java', 'Spring Boot',
                  'AWS', 'Datadog', 'Jest', 'Cypress'
                ]
              }
            }),
            defineField({
              name: 'color',
              title: 'Brand Color',
              type: 'string',
              options: {
                list: [
                  { title: 'Vue Green', value: '#4FC08D' },
                  { title: 'Nuxt Green', value: '#00DC82' },
                  { title: 'React Blue', value: '#61DAFB' },
                  { title: 'TypeScript Blue', value: '#3178C6' },
                  { title: 'OutSystems Red', value: '#ED1C24' },
                  { title: 'Flutter Blue', value: '#02569B' },
                  { title: 'Java Orange', value: '#ED8B00' },
                  { title: 'Spring Green', value: '#6DB33F' },
                  { title: 'AWS Orange', value: '#FF9900' },
                  { title: 'Datadog Purple', value: '#632CA6' },
                  { title: 'Jest Red', value: '#C21325' },
                  { title: 'Cypress Dark', value: '#17202C' }
                ]
              }
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  'frontend', 'backend', 'mobile', 'cloud', 'testing'
                ]
              }
            })
          ]
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage'
    }
  }
})