import { fetchAPI, fetchPages } from "@/lib/api";
import { HeroImageFragment, TextImageFragment } from "@/lib/section-fragment";

export async function GetCampaignPage(locale, preview) {
  const data = await fetchAPI(
    `
    query CampaignPage($locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) {
        campaignPage(locale: $locale) {
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
        }
      }
    }
    ${HeroImageFragment}
    ${TextImageFragment}
    `,
    {
      preview,
      variables: {
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
