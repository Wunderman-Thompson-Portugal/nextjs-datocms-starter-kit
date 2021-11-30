import { fetchAPI, responsiveImageFragment } from "@/lib/api";
import {
  HeroImageFragment,
  TextImageFragment,
  LogotypeFragment,
  ProductRangeFragment,
  FeatureProductFragment,
} from "@/lib/section-fragment";

export async function GetCampaignPage(slug, locale, preview) {
  const data = await fetchAPI(
    `
    query CampaignPage($slug: String, $locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) {
        campaignPage(filter: {slug: {eq: $slug}}, locale: $locale) {
        __typename
        id
        title
        heroBanner {
          __typename
          ... HeroImageFragment
        }
        sections{
            __typename
            ... TextImageFragment
            ... LogotypeFragment
            ... ProductRangeFragment
            ... FeatureProductFragment
 
        }
      }
    }
    ${responsiveImageFragment }
    ${HeroImageFragment}
    ${TextImageFragment}
    ${LogotypeFragment}
    ${ProductRangeFragment}
    ${FeatureProductFragment}
    `,
    {
      preview,
      variables: {
        slug,
        locale,
      },
    }
  );
  return data;
}

export async function getAllCampaignPages() {
  const data = fetchAPI(
    ` 
    query AllCampaignPages {
      allCampaignPages {
        _allSlugLocales {
          locale
          value
        }
      }
    }
  `
  );
  return data;
}
