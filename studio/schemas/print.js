import { HiOutlinePencil } from 'react-icons/hi';

export default {
  name: 'print',
  title: 'Print',
  type: 'document',
  icon: HiOutlinePencil,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    // // {
    // //   name: "author",
    // //   title: "Author",
    // //   type: "reference",
    // //   to: { type: "author" },
    // // },
    {
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
    },

    {
      name: 'colorizedImage',
      title: 'Colorized image',
      type: 'customImage',
    },

    {
      name: 'originalImage',
      title: 'Original image',
      type: 'customImage',
    },

    {
      name: 'colorizedDate',
      title: 'Colorized date',
      type: 'datetime',
    },

    {
      name: 'originalDate',
      title: 'Original date',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today',
      },
    },

    {
      name: 'series',
      title: 'Series',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'series' } }],
    },

    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },

    {
      name: 'commercejsProducts',
      title: 'Related Products',
      type: 'commercejsProducts',
    },
  ],

  initialValue: {
    isFeatured: false,
  },

  preview: {
    select: {
      title: 'title',
      // // author: "author.name",
      media: 'colorizedImage',
    },
    // // prepare(selection) {
    // //   const { author } = selection;
    // //   return Object.assign({}, selection, {
    // //     subtitle: author && `by ${author}`,
    // //   });
    // // },
  },
};
