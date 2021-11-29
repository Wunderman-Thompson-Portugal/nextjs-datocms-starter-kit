import { fetchAPI } from "@/lib/api";

export const siteConfigurationQuery = `
  siteConf(filter: {confId: {eq: "${process.env.SITE_RELATED}"}}, locale: $locale) {
    id
    websiteName
}

`;

export async function getSiteConfiguration(locale, preview) {
  const data = await fetchAPI(
    `
          query siteConfiguration($locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) {
            
              ${siteConfigurationQuery}
            }
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
