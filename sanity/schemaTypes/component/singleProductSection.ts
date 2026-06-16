import { defineField, defineType } from 'sanity';

export const singleProductSection = defineType({
    name: 'singleProductSection',
    title: 'Single Product Section',
    type: 'document',
    fields: [
        defineField({
            name: 'theme',
            title: 'Theme Layout',
            type: 'reference',
            to: [{ type: 'themeConfig' }],
        }),
        defineField({
            name: 'name',
            title: 'Internal Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ]
});