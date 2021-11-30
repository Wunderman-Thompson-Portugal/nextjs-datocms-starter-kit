import Image from "@/components/Atoms/Image";
import dynamic from "next/dynamic";

const Paragraph = dynamic(() =>
  import("@/components/Atoms/Paragraph").then((c) => c.Paragraph)
);

export function ProductCard(props) {
  return (
    <>
      <div className="flex-1">
        <div className="flex items-center mx-auto justify-center h-12 w-12 ">
          <Image className={`min-w-[5rem]`} data={props.data.logo} />
        </div>
      </div>
      {props.data.description && (
        <Paragraph className="mt-12 text-sm" copy={props.data.description} />
      )}
    </>
  );
}
