import { HiOutlineBookmark } from 'react-icons/hi';

export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  icon: HiOutlineBookmark,
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
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
