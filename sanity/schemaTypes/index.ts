import { carouselSlider } from "./component/carouselSlider";
import { collectionSection } from "./component/CollectionSection";
import { footerSection } from "./component/footerSection";
import { heroBannerType } from "./component/heroBanner";
import { navBar } from "./component/navBar";
import { promoSection } from "./component/promoSection";
import { singleProductSection } from "./component/singleProductSection";
import { themeConfig } from "./config/themeConfig";
import { pageType } from "./pageType";
import { collectionType } from "./shopify/collectionType";
import { productType } from "./shopify/productType";
import { variantType } from "./shopify/varientType";

export const schemaTypes = [
    pageType, 
    productType, 
    variantType, 
    collectionType, 
    heroBannerType, 
    themeConfig, 
    navBar, 
    carouselSlider, 
    promoSection, 
    collectionSection, 
    footerSection,
    singleProductSection
]