import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { DEFAULT_THEME } from './constants'
import { presentationTool } from 'sanity/presentation'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

export default defineConfig({
    name: 'default',
    title: 'sanity',

    projectId: `${process.env.SANITY_STUDIO_PROJECT_ID}`,
    dataset: 'production',

    plugins: [
        structureTool({ structure: structure }),
        visionTool(),
        simplerColorInput(),
        presentationTool({
            previewUrl: {
                origin: process.env.SANITY_STUDIO_FRONTEND_URL,
                previewMode: {
                    enable: '/api/preview',
                },
            },
        }),
    ],

    schema: {
        types: schemaTypes,
    },

    document: {
        actions: (prev, context) => {
            if (context.documentId === DEFAULT_THEME) {
                return prev.filter((action) => action.action !== 'delete')
            }
            return prev
        },
    },

})
