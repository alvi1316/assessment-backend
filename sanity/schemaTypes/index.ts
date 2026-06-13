import { heroBannerType } from "./component/heroBanner";
import { navBar } from "./component/navBar";
import { themeConfig } from "./config/themeConfig";
import { pageType } from "./pageType";
import { collectionType } from "./shopify/collectionType";
import { productType } from "./shopify/productType";
import { variantType } from "./shopify/varientType";

export const schemaTypes = [pageType, productType, variantType, collectionType, heroBannerType, themeConfig, navBar]