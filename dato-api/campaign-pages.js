import { fetchAPI, fetchPages } from "@/lib/api";

import { HeroImageFragment } from "@/lib/section-fragment";

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
        }
      }
    }
    ${HeroImageFragment}
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
  const data = fetchPages(
    `
      allCampaignPages {
        _allSlugLocales {
          locale
          value
        }
      }
    `,
    "allCampaignPages"
  );
  return data;
}
