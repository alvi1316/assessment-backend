import { defineField, defineType } from 'sanity';

export const variantType = defineType({
    name: 'productVariant',
    title: 'Product Variants (Synced)',
    type: 'document',
    fields: [
        defineField({
            name: 'store',
            title: 'Shopify Store Variant Properties',
            type: 'object',
            readOnly: true,
            fields: [
                { name: 'title', title: 'Variant Title', type: 'string' },
                { name: 'id', title: 'Variant ID', type: 'number' },
                { name: 'gid', title: 'GID', type: 'string' },
                { name: 'sku', title: 'SKU', type: 'string' },
                { name: 'price', title: 'Current Price', type: 'number' },
                { name: 'compareAtPrice', title: 'Compare At Price (MSRP)', type: 'number' },
                { name: 'status', title: 'Status', type: 'string' },
                { name: 'createdAt', title: 'Shopify Creation Date', type: 'string' },
                { name: 'isDeleted', title: 'Is Deleted in Shopify', type: 'boolean' },
                { name: 'productId', title: 'Parent Product ID', type: 'number' },
                { name: 'productGid', title: 'Parent GID', type: 'string' },
                { name: 'option1', title: 'Option 1 Value (e.g., Size/Title)', type: 'string' },
                { name: 'option2', title: 'Option 2 Value (e.g., Color)', type: 'string' },
                { name: 'option3', title: 'Option 3 Value (e.g., Material)', type: 'string' },
                defineField({
                    name: 'inventory',
                    title: 'Inventory Logistics',
                    type: 'object',
                    fields: [
                        { name: 'isAvailable', title: 'Is In Stock', type: 'boolean' },
                        { name: 'policy', title: 'Out of Stock Policy', type: 'string' }
                    ]
                }),
                defineField({
                    name: 'shop',
                    title: 'Origin Shop Domain',
                    type: 'object',
                    fields: [
                        { name: 'domain', type: 'string' }
                    ]
                })
            ]
        }),
    ],
    preview: {
        select: {
            title: 'store.title',
            price: 'store.price',
            sku: 'store.sku'
        },
        prepare({ title, price, sku }) {
            return {
                title: title || 'Unnamed Variant',
                subtitle: `${sku ? `[${sku}] ` : ''}$${price || '0.00'}`
            };
        }
    }
});