import { fetchAPI } from "@/lib/api";

export const siteConfigurationQuery = `
  siteConfig(filter: {configId: {eq: "${process.env.WEBSITE_CONFIG_ID}"}}, locale: $locale) {
    id
    configId
    websiteName
    headerConf {
      logotype {
        title
        alt
        url
      }
    }
    footerConf {
      id
    }
}
`;

export async function getSiteConfiguration(locale, preview) {
  const data = await fetchAPI(
    `
          query siteConfig($locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) {
            
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

export async function getSiteId() {
  const data = await fetchAPI(
    `
      query siteConfig($locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) { 
        siteConfig(filter: {configId: {eq: "${process.env.WEBSITE_CONFIG_ID}"}}, locale: $locale) {
          id
          configId
        }
      }
    `
  );
  return data?.siteConfig;
}
