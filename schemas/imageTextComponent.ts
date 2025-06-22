export default {
  name: 'imageTextComponent',
  title: 'Image & Text Component',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image Left', value: 'image-left' },
          { title: 'Image Right', value: 'image-right' }
        ]
      },
      initialValue: 'image-left'
    }
  ]
}
