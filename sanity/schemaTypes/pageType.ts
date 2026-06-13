import { defineType, defineField } from 'sanity'
import { DEFAULT_THEME } from '../constants'

export const pageType = defineType({
    name: 'page',
    title: 'Dynamic Page Router',
    type: 'document',
    fields: [
        defineField({
            name: 'theme',
            title: 'Theme Layout',
            type: 'reference',
            to: [{ type: 'themeConfig' }],
            initialValue: () => ({
                _type: 'reference',
                _ref: DEFAULT_THEME
            }),
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Page URL Slug',
            type: 'slug',
            description: 'Used to route this page in Hydrogen (e.g., "holiday-sale")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Content Blocks',
            description: 'Create, select, and stack components in the exact order you want them to display on the storefront.',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    title: 'Reference a Component',
                    to: [
                        { type: 'heroBanner' },
                        { type: 'navBar' }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current'
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle ? `/${subtitle}` : 'Missing URL routing path'
            }
        }
    }
})