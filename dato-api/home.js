import { fetchAPI } from "@/lib/api";

import { HeroImageFragment } from "@/lib/section-fragment";

export async function getHomePage(locale, preview) {
  const data = await fetchAPI(
    `
    query HomePage($locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) {
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
