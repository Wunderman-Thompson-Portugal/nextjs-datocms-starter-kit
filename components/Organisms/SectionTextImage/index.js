import Image from "@/components/Atoms/Image";
import dynamic from "next/dynamic";

const TextImageCopy = dynamic(() =>
  import("@/components/Molecules/TextImageCopy").then((c) => c.TextImageCopy)
);

export default function SectionTextImage(data) {
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Image classNameName={``} data={data.image} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <TextImageCopy data={data} />
        </div>
      </div>
    </section>
  );
}

export const fragment = `
    fragment TextImageFragment on SectionTextImageRecord{
      __typename
      title
      subtitle
      id
      cta {
        id
      }
      addHeader
      content
      image {
        responsiveImage(imgixParams: {crop: focalpoint, auto:format, q:60, w: "800"}) {
            src
        }
    }
  }
`;
