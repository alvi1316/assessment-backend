import { defineType, defineField } from 'sanity'

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
const validateHex = (Rule: any) =>
    Rule.custom((value: string) => {
        if (!value) return true
        return hexRegex.test(value) ? true : 'Must be a valid hex color code starting with # (e.g., #FFFFFF)'
    })

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
            initialValue: 'Default Theme',
        }),
        defineField({
            name: 'colorTextPrimary',
            title: 'Primary Text',
            type: 'string',
            fieldset: 'foreground',
            initialValue: '#111111',
            validation: validateHex
        }),
        defineField({
            name: 'colorTextSecondary',
            title: 'Secondary/Muted Text',
            type: 'string',
            fieldset: 'foreground',
            initialValue: '#666666',
            validation: validateHex
        }),
        defineField({
            name: 'colorTextAccent',
            title: 'Accent/Link Text',
            type: 'string',
            fieldset: 'foreground',
            initialValue: '#0066CC',
            validation: validateHex
        }),
        defineField({
            name: 'colorBgPrimary',
            title: 'Main Background',
            type: 'string',
            fieldset: 'background',
            initialValue: '#FFFFFF',
            validation: validateHex
        }),
        defineField({
            name: 'colorBgSecondary',
            title: 'Surface/Card Background',
            type: 'string',
            fieldset: 'background',
            initialValue: '#F9F9F9',
            validation: validateHex
        }),
        defineField({
            name: 'colorBgAccent',
            title: 'Accent/CTA Background',
            type: 'string',
            fieldset: 'background',
            initialValue: '#111111',
            validation: validateHex
        }),
        defineField({
            name: 'colorBorderDefault',
            title: 'Default Border',
            type: 'string',
            fieldset: 'border',
            initialValue: '#E5E5E5',
            validation: validateHex
        }),
        defineField({
            name: 'colorBorderMuted',
            title: 'Subtle/Muted Border',
            type: 'string',
            fieldset: 'border',
            initialValue: '#F0F0F0',
            validation: validateHex
        }),
        defineField({
            name: 'colorBorderFocus',
            title: 'Focus/Active Border',
            type: 'string',
            fieldset: 'border',
            initialValue: '#0066CC',
            validation: validateHex
        }),
    ],
})