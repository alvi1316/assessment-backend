import { defineType, defineField } from 'sanity'

export const themeConfig = defineType({
    name: 'themeConfig',
    title: 'Theme Configuration',
    type: 'document',
    
    fieldsets: [
        {
            name: 'foreground',
            title: 'Foreground Colors (Text & Icons)',
            options: { collapsible: true, collapsed: false }
        },
        {
            name: 'background',
            title: 'Background Colors',
            options: { collapsible: true, collapsed: false }
        },
        {
            name: 'border',
            title: 'Border Colors',
            options: { collapsible: true, collapsed: false }
        }
    ],
    fields: [
        defineField({
            name: 'themeName',
            title: 'Theme Name',
            type: 'string',
        }),
        defineField({
            name: 'colorTextPrimary',
            title: 'Primary Text',
            type: 'simplerColor',
            fieldset: 'foreground',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorTextSecondary',
            title: 'Secondary/Muted Text',
            type: 'simplerColor',
            fieldset: 'foreground',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorTextAccent',
            title: 'Accent/Link Text',
            type: 'simplerColor',
            fieldset: 'foreground',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorBgPrimary',
            title: 'Main Background',
            type: 'simplerColor',
            fieldset: 'background',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorBgSecondary',
            title: 'Surface/Card Background',
            type: 'simplerColor',
            fieldset: 'background',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorBgAccent',
            title: 'Accent/CTA Background',
            type: 'simplerColor',
            fieldset: 'background',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorBorderDefault',
            title: 'Default Border',
            type: 'simplerColor',
            fieldset: 'border',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorBorderMuted',
            title: 'Subtle/Muted Border',
            type: 'simplerColor',
            fieldset: 'border',
            options: {
                colorFormat: 'hex'
            }
        }),
        defineField({
            name: 'colorBorderFocus',
            title: 'Focus/Active Border',
            type: 'simplerColor',
            fieldset: 'border',
            options: {
                colorFormat: 'hex'
            }
        }),
    ],
})