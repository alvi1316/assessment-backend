import { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S, context) =>
    S.defaults()
        .title('Content')
        .items([
            S.documentTypeListItem('page').title('Pages'),
            S.divider(),
            S.listItem()
                .title('Components')
                .child(
                    S.list()
                        .title('Design Components')
                        .items([
                            S.documentTypeListItem('heroBanner').title('Hero Banner'),
                            S.documentTypeListItem('navBar').title('Navigation Bar'),
                            S.documentTypeListItem('carouselSlider').title('Carousel Slider'),
                        ])
                ),
            S.listItem()
                .title('App Settings')
                .child(
                    S.list()
                        .title('Design Components')
                        .items([
                            S.documentTypeListItem('themeConfig').title('App Theme'),
                        ])
                ),
            S.divider(),
            S.documentTypeListItem('product').title('Products (Synced)'),
            S.documentTypeListItem('productVariant').title('Product Variants (Synced)'),
            S.documentTypeListItem('collection').title('Collections (Synced)'),

        ]);