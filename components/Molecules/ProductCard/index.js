/* eslint-disable jsx-a11y/alt-text */

import Image from "@/components/Atoms/Image";
import dynamic from "next/dynamic";

const Paragraph = dynamic(() =>
  import("@/components/Atoms/Paragraph").then((c) => c.Paragraph)
);

export function ProductCard(props) {

  return (
    <>
      <div className="col-span-1">
        {props.data.media.map((media) => (
          <div
            key={media.id}
            className="flex items-center mx-auto justify-center "
          >
            <Image className={`w-80`} data={media.image} />
          </div>
        ))}
      </div>
      {props.data.description && (
        <Paragraph className="mt-12 text-sm" copy={props.data.description} />
      )}
    </>
  );
}
