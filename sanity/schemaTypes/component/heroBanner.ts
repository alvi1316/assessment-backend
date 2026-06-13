import { defineField, defineType, defineArrayMember } from 'sanity';

export const heroBannerType = defineType({
    name: 'heroBanner',
    title: 'Hero Banner',
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
            title: 'Internal Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'text',
            title: 'Banner Text',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Underline', value: 'underline' }
                        ]
                    }
                }),
            ],
            validation: Rule => Rule.max(120).error('The description cannot exceed 120 characters.')
        }),
        defineField({
            name: 'textPosition',
            title: 'Banner Text Position',
            type: 'string',
            initialValue: () => 'center',
            validation: Rule => Rule.required(),
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                    { title: 'Center', value: 'center' }
                ],
                layout: 'dropdown',
            }
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'ctaText',
            title: 'Button Text',
            type: 'string'
        }),
        defineField({
            name: 'ctaUrl',
            title: 'Button Destination Link',
            type: 'string'
        }),
    ]
})