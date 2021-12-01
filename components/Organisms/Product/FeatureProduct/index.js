/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */

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
          <div
            className={` ${
              data.order == "Content first" ? "flex-row" : "flex-row-reverse"
            } lg:flex justify-between items-center`}
          >
            <FeatureProductHeader data={data} />
            {data.product &&
              data.product.media.map((entry) => (
                <div key="entry.id" className="order-2">
                  <Image className={`max-w-md mx-auto`} data={entry.image} />
                  {entry.color.map((color) => (
                    <div
                      style={{ backgroundColor: color.color.hex }}
                      className="mt-4 w-8 h-8 rounded-full"
                    ></div>
                  ))}
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
        id
        title
        description
        media{
          ... on PictureRecord {
          id
          color {
            name
            color {
              hex
            }
          } 
          image {
            responsiveImage(imgixParams: { auto:format, q:60, w: "600", ar: "2:1"}) {
              ... responsiveImageFragment
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
