import ReactMarkdown from "react-markdown";

export function Paragraph(props) {
  return (
    <>
      <ReactMarkdown className=" text-base leading-relaxed">
        {props.copy}
      </ReactMarkdown>
    </>
  );
}
