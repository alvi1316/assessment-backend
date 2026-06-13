import { defineField, defineType } from 'sanity';

export const productType = defineType({
    name: 'product',
    title: 'Products (Synced)',
    type: 'document',
    fields: [
        defineField({
            name: 'store',
            title: 'Shopify Store Catalog Properties',
            type: 'object',
            readOnly: true,
            fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'id', title: 'Product ID', type: 'number' },
                { name: 'gid', title: 'GID', type: 'string' },
                { name: 'vendor', title: 'Vendor', type: 'string' },
                { name: 'productType', title: 'Product Type', type: 'string' },
                { name: 'status', title: 'Status', type: 'string' },
                { name: 'tags', title: 'Tags', type: 'string' },
                { name: 'descriptionHtml', title: 'Description HTML', type: 'text', rows: 3 },
                { name: 'previewImageUrl', title: 'Preview Image URL', type: 'string' },
                { name: 'createdAt', title: 'Shopify Creation Timestamp', type: 'string' },
                { name: 'shopifyTriggeredAt', title: 'Last Sync Timestamp', type: 'string' },
                { name: 'isDeleted', title: 'Is Deleted in Shopify', type: 'boolean' },
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
                defineField({
                    name: 'priceRange',
                    title: 'Variant Price Range Mapping',
                    type: 'object',
                    fields: [
                        { name: 'minVariantPrice', title: 'Minimum Variant Price', type: 'number' },
                        { name: 'maxVariantPrice', title: 'Maximum Variant Price', type: 'number' }
                    ]
                }),
                defineField({
                    name: 'options',
                    title: 'Product Attributes Options Array',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            name: 'option',
                            fields: [
                                { name: 'name', title: 'Option Name', type: 'string' },
                                {
                                    name: 'values',
                                    title: 'Available Option Values',
                                    type: 'array',
                                    of: [{ type: 'string' }]
                                }
                            ]
                        }
                    ]
                }),
                defineField({
                    name: 'variants',
                    title: 'Linked Variant Documents references',
                    type: 'array',
                    of: [
                        {
                            type: 'reference',
                            to: [{ type: 'productVariant' }],
                            weak: true
                        }
                    ]
                })
            ]
        }),
    ],
    preview: {
        select: {
            title: 'store.title',
            subtitle: 'store.slug.current'
        }
    }
});