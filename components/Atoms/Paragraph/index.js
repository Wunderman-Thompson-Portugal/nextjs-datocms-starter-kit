import ReactMarkdown from "react-markdown";

export function Paragraph({copy, className}) {
  return (
    <>
      <ReactMarkdown className={className}>
        {copy}
      </ReactMarkdown>
    </>
  );
}
