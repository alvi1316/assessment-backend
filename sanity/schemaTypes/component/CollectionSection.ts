import { defineField, defineType } from 'sanity'

export const collectionSection = defineType({
    name: 'collectionSection',
    title: 'Collection Section',
    type: 'document',
    fields: [
        defineField({
            name: 'theme',
            title: 'Theme Layout',
            type: 'reference',
            to: [{ type: 'themeConfig' }],
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'collections',
            title: 'Collections',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'collection' }] }],
        }),
    ],
})