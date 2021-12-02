export function HeadlineH3({ copy, className }) {
  return (
    <>
      <h3 className={`font-sans text-gray-700 ${className}`}>{copy}</h3>
    </>
  );
}

export function HeadlineH2({ copy, className }) {
  return (
    <>
      <h2 className={`font-sans text-gray-700 ${className}`}>{copy}</h2>
    </>
  );
}
