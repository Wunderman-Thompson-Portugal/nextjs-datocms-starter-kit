import dynamic from "next/dynamic";

const HeadlineH3 = dynamic(() =>
  import("@/components/Atoms/Title").then((c) => c.HeadlineH3)
);

const Paragraph = dynamic(() =>
  import("@/components/Atoms/Paragraph").then((c) => c.Paragraph)
);

export function TextImageCopy(props) {
  return (
    <>
      {props.data.addHeader && <HeadlineH3 copy={props.data.title} />}
      {props.data.content && <Paragraph copy={props.data.content} />}
    </>
  );
}
