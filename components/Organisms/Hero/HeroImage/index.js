/* eslint-disable jsx-a11y/alt-text */

import styles from "./index.module.scss";
import ReactMarkdown from "react-markdown";
import Image from "@/components/Atoms/Image";
import { AppleIcon, AndroidIcon } from "@/components/Atoms/Vectors";

export default function HeroImage(data) {
  console.log(data);
  return (
    <>
      {/* hero */}
      <div className="hero bg-gray-100">
        {/* container */}
        <div className="container pt-8 md:pt-0 pl-0 sm:pl-8 lg:pl-16 xl:pl-20 mx-auto">
          {/* hero wrapper */}
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* hero text */}
            <div className="hero-text col-span-6  px-4 md:px-0">
              <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight mb-6">
                {data.title}
              </h1>
              <ReactMarkdown className="prose prose-sm max-w-none">
                {data.description}
              </ReactMarkdown>
            </div>

            {/* hero image */}
            <div className="relative hero-image col-span-6 z-10 min-h-[15rem] md:min-h-[50vh]">
              <Image
                className={`min-h-[15rem] md:min-h-[50vh] w-full ${styles.overlayBg}`}
                data={data.image}
              />
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
        image {
            responsiveImage(imgixParams: {fit: crop, crop: focalpoint, auto:format, q:60, w: "1200", ar: "1:1"}) {
                ...responsiveImageFragment
            }
        }
    }
`;
