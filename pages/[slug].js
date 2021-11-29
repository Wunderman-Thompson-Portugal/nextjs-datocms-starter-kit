import { GetCampaignPage, getAllCampaignPages } from "@/dato-api/campaign-pages";
import { createPagePaths, fetchComponentRelations } from "@/lib/api";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Organisms/Hero"));
import { useTranslation } from "next-i18next";
import { pageHandler } from "@/lib/pages-handler";

/**
 *
 * @param {array} data Homepage data
 * @returns JSX Element
 *
 */

export default function Index({ data }) {
  const { t } = useTranslation();

  return (
    <>
      <Hero data={data.heroBanner} />
      <div>{t("testTranslation")}</div>
    </>
  );
}

export async function getStaticProps(context) {
  const result = await GetCampaignPage(context.locale, context.preview);
  const pageData = await pageHandler(
    context,
    serverSideTranslations,
    result,
    "campaignPage"
  );

  return {
    props: {
      ...pageData.sst,
      data: { ...pageData.data },
      preview: pageData.preview,
    },
  };
}

export async function getStaticPaths(context) {
    const records = await getAllCampaignPages();
    let paths = createPagePaths(records, context);
  
    return {
      paths: paths || [],
      fallback: false,
    };
  }
