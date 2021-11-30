import ReactMarkdown from "react-markdown";

export function Praragraph(props) {
  return (
    <>
      <ReactMarkdown className=" text-base leading-relaxed">
        {props.copy}
      </ReactMarkdown>
    </>
  );
}
