import Image from "@/components/Atoms/Image";

import styles from "./index.module.scss";

export default function HeroImage(data) {
  console.log(data);
  return (
    <>
        <section className="flex-col md:flex-row flex items-center md:justify-between mx-5 my-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            {data.title}
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            {data.description}
          </h4>
        </section>
        <section className="flex-col md:flex-row flex items-center mx-5 my-16">
          <div className="w-full">
            <div className="relative -mx-5 sm:mx-0">
                <Image className={`min-h-[30rem] w-full ${styles.overlayBg}`} data={data.image} />
            </div>
          </div>
        </section>
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
            responsiveImage(imgixParams: {fit: crop, fm: jpg, h: "1000", w: "2000"}) {
                src
            }
        }
    }
`;
