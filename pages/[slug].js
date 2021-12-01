import {
  GetCampaignPage,
  getAllCampaignPages,
} from "@/dato-api/campaign-pages";
import { createPagePaths, fetchComponentRelations } from "@/lib/api";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Organisms/Hero"));
const Blocks = dynamic(() => import("@/components/Organisms"));
import { useTranslation } from "next-i18next";
import { pageHandler } from "@/lib/pages-handler";
import { getSiteId } from "@/dato-api/site-config";

/**
 *
 * @param {array} data Homepage data
 * @param {array} siteConfig Site configuration necessary to Layout build Header and Footer
 * @returns JSX Element
 *
 */

export default function Index({ siteConfig, data, relations }) {
  const { t } = useTranslation();

  return (
    <>
      <Hero data={data.heroBanner} />
      <Blocks sections={data.sections} relations={relations}></Blocks>
    </>
  );
}

export async function getStaticProps(context) {

  const result = await GetCampaignPage(
    context.params.slug,
    context.locale,
    context.preview
  );
  const pageData = await pageHandler(
    context,
    serverSideTranslations,
    result,
    "campaignPage"
  );

  return {
    props: {
      siteConfig: pageData.siteConfig,
      ...pageData.sst,
      data: { ...pageData.data },
      preview: pageData.preview,
    },
  };
}

export async function getStaticPaths(context) {
  const records = await getAllCampaignPages()

  let paths = createPagePaths(records?.allCampaignPages, context);

  return {
    paths: paths || [],
    fallback: false,
  };
}
