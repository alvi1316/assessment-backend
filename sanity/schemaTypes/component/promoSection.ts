import { defineField, defineType } from 'sanity';

export const promoSection = defineType({
    name: 'promoSection',
    title: 'Promo Section',
    type: 'document',
    fields: [
        defineField({
            name: 'theme',
            title: 'Theme Layout',
            type: 'reference',
            to: [{ type: 'themeConfig' }],
        }),
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        defineField({
            name: 'rows',
            title: 'Promo Rows Grid Layout',
            type: 'array',
            description: 'Add, arrange, and delete as many rows as needed. Drag and drop rows to reorder them.',
            validation: (Rule) => Rule.required().min(1),
            of: [
                {
                    name: 'promoRow',
                    title: 'Promo Row',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'buttonText',
                            title: 'Button Text',
                            type: 'string',
                            initialValue: 'SHOP NOW',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'image',
                            title: 'Section Image',
                            type: 'image',
                            options: { hotspot: true },
                            validation: (Rule) => Rule.required(),
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative Text',
                                    validation: (Rule) => Rule.required(),
                                }
                            ],
                        }
                    ],
                }
            ],
        }),
    ],
});