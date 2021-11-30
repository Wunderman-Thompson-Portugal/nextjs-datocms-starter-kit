import Image from "@/components/Atoms/Image";
import ReactMarkdown from "react-markdown";

export default function SectionTextImage(data) {
  return (
    <section className="relative pt-12 bg-blueGray-50">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <Image classNameName={``} data={data.image} />
        </div>
        <div className="col-span-1">
          {data.addHeader && (
            <h3 className="text-3xl font-semibold">{data.title}</h3>
          )}
          <ReactMarkdown className=" text-base leading-relaxed text-blueGray-500">
            {data.content}
          </ReactMarkdown>
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
        responsiveImage(imgixParams: {crop: focalpoint, auto:format, q:60, w: "800", ar: "1:1"}) {
            src
        }
    }
  }
`;
