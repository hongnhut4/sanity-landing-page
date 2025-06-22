export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'links',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Platform Name',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon (SVG)',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}
