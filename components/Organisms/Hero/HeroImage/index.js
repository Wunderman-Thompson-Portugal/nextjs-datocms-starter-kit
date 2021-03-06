/* eslint-disable jsx-a11y/alt-text */

import styles from "./index.module.scss";
import ReactMarkdown from "react-markdown";
import Image from "@/components/Atoms/Image";
import { AppleIcon, AndroidIcon } from "@/components/Atoms/Vectors";

export default function HeroImage(data) {

  return (
    <>
      {/* hero */}
      <div className="hero bg-gray-200 rounded-xl overflow-hidden">
        {/* container */}
        <div
          className={`${
            data.alignment == "Left"
              ? "pt-10 md:pl-8 md:pt-0 lg:pl-16 xl:pl-20 "
              : "pb-10 md:pr-8 lg:pr-16 xl:pr-20"
          } container pl-0 md:pb-0   max-w-full`}
        >
          {/* hero wrapper */}
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center ">
            {/* hero text */}
            <div
              className={`${
                data.alignment == "Left" ? "order-1" : "order-2"
              } hero-text col-span-6  px-4 md:px-0`}
            >
              <h1 className=" font-sans font-bold  text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight mb-6">
                {data.title}
              </h1>
              <ReactMarkdown className="font-sans prose prose-sm max-w-none">
                {data.description}
              </ReactMarkdown>
            </div>

            {/* hero image */}
            <div
              className={`${data.alignment == "Left" ? "order-2" : "order-1"}
            relative hero-image col-span-6 z-10 `}
            >
              <Image className={`w-full`} data={data.image} />
            </div>
          </div>
        </div>
      </div>
      {/* end hero */}
    </>
  );
}

export const fragment = `
    fragment HeroImageFragment on SectionHeroImageRecord{
        __typename
        id
        title
        description
        alignment
        image {
            responsiveImage(imgixParams: {fit: crop, crop: focalpoint, auto:format, q:60, w: "1200", ar: "1:1"}) {
                ...responsiveImageFragment
            }
        }
    }
`;
