/**
 * Here we handle all the components based on __typename of DatoCms
 * It's used by Blocks Component to call specific component
 */

import dynamic from "next/dynamic";

export const sectionConfig = {
  SectionHeroImageRecord: {
    repeatable: false,
    component: dynamic(() => import("@/components/Organisms/Hero/HeroImage")),
  },
  SectionTextImageRecord: {
    repeatable: false,
    component: dynamic(() => import("@/components/Organisms/TextImage")),
  },
  SectionLogotypeRecord: {
    repeatable: false,
    component: dynamic(() => import("@/components/Organisms/Logotypes")),
  },
  SectionProductRangeRecord: {
    repeatable: false,
    component: dynamic(() => import("@/components/Organisms/Product/ProductRange")),
  },
  SectionFeatureProductRecord: {
    repeatable: false,
    component: dynamic(() =>
      import("@/components/Organisms/Product/FeatureProduct")
    ),
  },
};
