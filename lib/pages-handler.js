import { fetchComponentRelations } from "./api";
import { getSiteConfiguration } from "@/dato-api/site-config";

/**
 * Handler the main data to pages
 * @param {any} context The page context
 * @param {serverSideTranslations} serverSideTranslations The server side translation instance
 * @param {Array} result The page result from get the page data
 * @param {string} resultAlias The name of returned alias from query
 */
export async function pageHandler (context, serverSideTranslations, result, resultAlias) {
    const preview = context.preview !== undefined ? context.preview : false;
    const sst = await serverSideTranslations(context.locale, ['common', 'slugs']);
    const data = result !== null && result[resultAlias] !== null ? result[resultAlias] : null;
    const siteConfig = result.siteConfiguration !== undefined ? result?.siteConfiguration : await getSiteConfiguration(context.locale, preview);
    const relations = data?.sections ? await fetchComponentRelations({ sections: data.sections }, context.locale, context.preview) : null

    return {
        sst: sst,
        data: data,
        siteConfig: siteConfig,
        relations: relations,
        preview: preview
    }
}