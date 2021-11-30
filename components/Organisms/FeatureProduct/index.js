import Image from "@/components/Atoms/Image";
import dynamic from "next/dynamic";

const FeatureProductHeader = dynamic(() =>
  import("@/components/Molecules/FeatureProductHeader").then(
    (c) => c.FeatureProductHeader
  )
);

export default function sectionFeatureProduct(data) {
  return (
    <>
      <div className="py-16">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <FeatureProductHeader data={data} />
            {data.product &&
              data.product.media.map((entry) => (
                <div className="order-2">
                  <Image className={`min-h-[30rem]`} data={entry.image} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const fragment = `
    fragment FeatureProductFragment on SectionFeatureProductRecord{
      __typename
      id
      title
      subtitle
      order
      content
      addHeader
      product {
        title
        description
        media{
          ... on PictureRecord {
          id
          image {
            responsiveImage(imgixParams: { auto:format, q:60, w: "600", ar: "2:1"}) {
              src
            }
          }
          }
        }
        brand {
          tagline
          officialWebsite
          logo {
            url
          }
        }
      }
  }
`;
