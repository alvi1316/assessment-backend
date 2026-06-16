import { defineField, defineType } from 'sanity'

export const carouselSlider = defineType({
    name: 'carouselSlider',
    title: 'Carousel Slider',
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
            title: 'Slider Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'carouselType',
            title: 'Carousel Content Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Products List', value: 'products' },
                    { title: 'Collections List', value: 'collections' },
                ],
                layout: 'radio',
            },
            initialValue: 'products',
            validation: (Rule) => Rule.required(),
        }),
        {
            name: 'cardSpace',
            title: 'Card Space(px)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0).integer(), 
            initialValue: 300
        },
        {
            name: 'cardStep',
            title: 'Card Elevation Space(px)',
            type: 'number',
            validation: (Rule) => Rule.required().max(-1).integer(), 
            initialValue: -80
        },
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
            hidden: ({ parent }: { parent: any }) => parent?.carouselType !== 'products',
            validation: (Rule) =>
                Rule.custom((field, context: any) => {
                    if (context.parent?.carouselType === 'products' && (!field || field.length === 0)) {
                        return 'You must add at least one product.'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'collections',
            title: 'Collections',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'collection' }] }],
            hidden: ({ parent }: { parent: any }) => parent?.carouselType !== 'collections',
            validation: (Rule) =>
                Rule.custom((field, context: any) => {
                    if (context.parent?.carouselType === 'collections' && (!field || field.length === 0)) {
                        return 'You must add at least one collection.'
                    }
                    return true
                }),
        }),
    ],
})