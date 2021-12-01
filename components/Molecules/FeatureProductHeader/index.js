import dynamic from "next/dynamic";

const HeadlineH2 = dynamic(() =>
  import("@/components/Atoms/Title").then((c) => c.HeadlineH2)
);

const Subtitle = dynamic(() =>
  import("@/components/Atoms/Subtitle").then((c) => c.Subtitle)
);

const Paragraph = dynamic(() =>
  import("@/components/Atoms/Paragraph").then((c) => c.Paragraph)
);

export function FeatureProductHeader(props) {
  return (
    <>
      <div className="lg:w-6/12 py-7 lg:p-0 ">
        <HeadlineH2
          className="text-4xl font-sans font-bold leading-tight mb-5 capitalize"
          copy={props.data.title}
        />
        {props.data.addHeader && (
          <Subtitle className="text-xl" copy={props.data.subtitle} />
        )}
        {props.data.content && <Paragraph copy={props.data.content} />}
      </div>
    </>
  );
}
