import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";

const HeadlineH3 = dynamic(() =>
  import("@/components/Atoms/Title").then((c) => c.HeadlineH3)
);

export function TextImageCopy(props) {
  return (
    <>
      {props.data.addHeader && <HeadlineH3 copy={props.data.title} />}
      <ReactMarkdown className=" text-base leading-relaxed text-blueGray-500">
        {props.data.content}
      </ReactMarkdown>
    </>
  );
}
