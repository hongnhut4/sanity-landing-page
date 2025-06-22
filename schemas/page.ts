export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'components',
      title: 'Page Components',
      type: 'array',
      of: [
        { type: 'textComponent' },
        { type: 'imageComponent' },
        { type: 'imageTextComponent' }
      ]
    }
  ]
}
