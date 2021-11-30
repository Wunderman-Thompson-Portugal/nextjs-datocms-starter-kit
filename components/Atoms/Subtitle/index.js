import ReactMarkdown from "react-markdown";

export function Subtitle({ copy, className }) {
  return (
    <>
      <ReactMarkdown className={className}>{copy}</ReactMarkdown>
    </>
  );
}
