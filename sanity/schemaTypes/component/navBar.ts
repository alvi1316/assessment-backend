import { defineType, defineField } from 'sanity'

export const navBar = defineType({
    name: 'navBar',
    title: 'Navbar Configuration',
    type: 'document',
    fieldsets: [
        { name: 'brand', title: 'Brand Identity', options: { collapsible: false } },
        { name: 'navigation', title: 'Navigation Menu', options: { collapsible: false } },
        { name: 'actions', title: 'Action Buttons', options: { collapsible: false } }
    ],
    fields: [
        defineField({
            name: 'theme',
            title: 'Theme Layout',
            type: 'reference',
            to: [{ type: 'themeConfig' }],
        }),
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            fieldset: 'brand',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Crucial for SEO and accessibility (e.g., "BrandName Home").',
                    validation: (Rule) => Rule.required()
                }
            ]
        }),
        defineField({
            name: 'menuItems',
            title: 'Menu Links',
            type: 'array',
            fieldset: 'navigation',
            description: 'The central navigation links.',
            of: [
                {
                    type: 'object',
                    name: 'link',
                    title: 'Link',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
                        { name: 'url', title: 'URL or Path', type: 'string', description: 'e.g., /collections/all or https://blog.com', validation: (Rule) => Rule.required() }
                    ]
                }
            ]
        }),
    ],
    preview: {
        select: {
            docTitle: 'title', 
            logoImage: 'logo'  
        },
        prepare({ docTitle, logoImage }) {
            return {
                title: docTitle ? `${docTitle} Navbar` : 'Main Navbar Config',
                subtitle: 'Navigation Bar',
                media: logoImage
            }
        }
    }
})