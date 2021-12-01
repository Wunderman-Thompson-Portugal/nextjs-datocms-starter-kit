/* eslint-disable jsx-a11y/alt-text */

import Image from "@/components/Atoms/Image";
import dynamic from "next/dynamic";

const Paragraph = dynamic(() =>
  import("@/components/Atoms/Paragraph").then((c) => c.Paragraph)
);

export function LogotypeCard(props) {
  return (
    <>
      <div
        key={props.key}
        className="w-full flex-col md:w-1/3 lg:w-1/4 py-9 transition bg-white hover:bg-gray-50 mt-6  shadow rounded dark:bg-gray-800"
      >
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-24 w-24 ">
            <Image className={`min-w-full`} data={props.data.logo} />
          </div>
        </div>
        {props.data.description && (
          <Paragraph
            className="mt-12 font-sans px-8 prose-sm leading-snug transition text-gray-400 hover:text-gray-800"
            copy={props.data.description}
          />
        )}
      </div>
    </>
  );
}
