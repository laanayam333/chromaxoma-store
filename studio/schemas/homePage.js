export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
    },
    {
      name: 'featuredHeading',
      title: 'Featured Heading',
      type: 'string',
    },
  ],
  // preview: {
  //   select: {
  //     title: "name",
  //     media: "image",
  //   },
  // },
};
