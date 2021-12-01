import ReactMarkdown from "react-markdown";

export function Paragraph({ copy, className }) {
  return (
    <>
      <ReactMarkdown className={`font-sans ${className}`}>{copy}</ReactMarkdown>
    </>
  );
}
