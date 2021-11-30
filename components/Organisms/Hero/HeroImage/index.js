import styles from "./index.module.scss";

import Image from "@/components/Atoms/Image";
import { AppleIcon, AndroidIcon } from "@/components/Atoms/Vectors";

export default function HeroImage(data) {
  console.log(data);
  return (
    <>
      {/* hero */}
      <div className="hero bg-gray-100 py-16">
        {/* container */}
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          {/* hero wrapper */}
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* hero text */}
            <div className="hero-text col-span-6">
              <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                {data.title}
              </h1>
              <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                {data.description}
              </p>
              <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start">
                <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
                  <div className="logo">
                    <AppleIcon />
                  </div>
                  <div className="text">
                    <p className=" text-xs text-gray-600">Download on the</p>
                    <p className=" text-xs font-semibold text-gray-900">
                      Apple Store
                    </p>
                  </div>
                </button>
                <button className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
                  <div className="image">
                    <AndroidIcon />
                  </div>
                  <div className="text">
                    <p className="text-xs text-gray-600">Download it from</p>
                    <p className="text-xs font-semibold text-gray-900">
                      Google play
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* hero image */}
            <div className="relative hero-image col-span-6 z-10 min-h-[30rem]">
              <Image
                className={`min-h-[30rem] w-full ${styles.overlayBg}`}
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
            responsiveImage(imgixParams: {fit: crop, crop: focalpoint, auto:format, q:60, w: "1200", ar: "2:1"}) {
                src
            }
        }
    }
`;
