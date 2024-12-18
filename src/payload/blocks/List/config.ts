import { Block } from 'payload'

const ListConfig: Block = {
  slug: 'List',
  // imageURL: '',
  interfaceName: 'ListType',
  labels: {
    singular: 'List Block',
    plural: 'List Blocks',
  },
  imageURL: '/images/blocks/ListBlock.png',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      type: 'select',
      name: 'collectionSlug',
      label: 'Collection Slug',
      options: [
        {
          label: 'Tags',
          value: 'tags',
        },
        {
          label: 'Authors',
          value: 'users',
        },
      ],
    },
  ],
}

export default ListConfig
