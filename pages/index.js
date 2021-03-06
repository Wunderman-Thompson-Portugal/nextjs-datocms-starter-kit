import { getHomePage } from "@/dato-api/home";
import { GetCampaignPage, getAllCampaignPages } from "@/dato-api/campaign-pages";
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
    <></>
  );
}

export async function getStaticProps(context) {
  const result = []
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
