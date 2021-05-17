export default {
  title: 'Custom Image',
  name: 'customImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      title: 'Alt',
      name: 'alt',
      type: 'string',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
