import { defineField, defineType } from 'sanity';

export const collectionType = defineType({
    name: 'collection',
    title: 'Collections (Synced)',
    type: 'document',
    fields: [
        defineField({
            name: 'store',
            title: 'Shopify Store Catalog Properties',
            type: 'object',
            readOnly: true,
            fields: [
                { name: 'title', title: 'Collection Title', type: 'string' },
                { name: 'id', title: 'Collection ID', type: 'number' },
                { name: 'gid', title: 'GID', type: 'string' },
                { name: 'sortOrder', title: 'Default Sort Order', type: 'string' },
                { name: 'descriptionHtml', title: 'Description HTML', type: 'text', rows: 3 },
                { name: 'createdAt', title: 'Shopify Creation Timestamp', type: 'string' },
                { name: 'shopifyTriggeredAt', title: 'Last Sync Timestamp', type: 'string' },
                { name: 'isDeleted', title: 'Deleted in Shopify', type: 'boolean' },
                defineField({
                    name: 'slug',
                    title: 'URL Slug Handle',
                    type: 'object',
                    fields: [
                        { name: 'current', type: 'string' }
                    ]
                }),
                defineField({
                    name: 'shop',
                    title: 'Origin Shop Domain',
                    type: 'object',
                    fields: [
                        { name: 'domain', type: 'string' }
                    ]
                }),
            ]
        }),
        defineField({
            name: 'collectionImage',
            title: 'Sanity Collection Image',
            type: 'image',
            options: { hotspot: true },
        })
    ],
    preview: {
        select: {
            title: 'store.title',
            subtitle: 'store.slug.current'
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Untitled Collection',
                subtitle: subtitle ? `/collections/${subtitle}` : 'No handle set'
            };
        }
    }
});