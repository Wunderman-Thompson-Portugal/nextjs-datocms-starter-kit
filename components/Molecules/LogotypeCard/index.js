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
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 pt-12 pb-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800"
      >
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-24 w-24 ">
            <Image className={`min-w-full`} data={props.data.logo} />
          </div>
        </div>
        {props.data.description && (
          <Paragraph
            className="mt-12 font-sans  text-sm"
            copy={props.data.description}
          />
        )}
      </div>
    </>
  );
}
