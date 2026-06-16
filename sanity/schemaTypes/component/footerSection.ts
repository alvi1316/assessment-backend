import { defineField, defineType } from 'sanity';

export const footerSection = defineType({
    name: 'footerSection',
    title: 'Footer Configuration',
    type: 'document',
    fields: [
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            initialValue: '© 2026 Your Brand. All rights reserved.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'links',
            title: 'Footer Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'footerLink',
                    title: 'Link',
                    fields: [
                        { name: 'label', type: 'string', title: 'Link Label', validation: (Rule) => Rule.required() },
                        { name: 'url', type: 'string', title: 'URL Path', validation: (Rule) => Rule.required() }
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'url' }
                    }
                }
            ]
        })
    ]
});