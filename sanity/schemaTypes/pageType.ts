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
                    type: 'object',
                    name: 'blockReference',
                    title: 'Page Block',
                    fields: [
                        defineField({
                            name: 'block',
                            title: 'Select Component',
                            type: 'reference',
                            to: [
                                { type: 'heroBanner' },
                                { type: 'navBar' },
                                { type: 'carouselSlider' },
                                { type: 'promoSection' },
                                { type: 'collectionSection' },
                            ],
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'isSticky',
                            title: 'Sticky Element',
                            description: 'If enabled, this block will remain fixed at the top of the viewport when scrolling.',
                            type: 'boolean',
                            initialValue: false,
                        })
                    ],
                    preview: {
                        select: {
                            title: 'block.title',
                            isSticky: 'isSticky',
                        },
                        prepare({ title, isSticky }) {
                            return {
                                title: title || 'Untitled Block Component',
                                subtitle: isSticky ? 'Sticky' : 'Standard Position',
                            }
                        }
                    }
                }
            ]
        }),

        // defineField({
        //     name: 'pageBuilder',
        //     title: 'Page Content Blocks',
        //     description: 'Create, select, and stack components in the exact order you want them to display on the storefront.',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             title: 'Reference a Component',
        //             to: [
        //                 { type: 'heroBanner' },
        //                 { type: 'navBar' },
        //                 { type: 'carouselSlider' }
        //             ]
        //         }
        //     ]
        // })
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