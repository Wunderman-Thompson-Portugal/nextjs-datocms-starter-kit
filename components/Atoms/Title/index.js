export function HeadlineH3({ copy, className }) {
  return (
    <>
      <h3 className={`font-sans ${className}`}>{copy}</h3>
    </>
  );
}

export function HeadlineH2({ copy, className }) {
  return (
    <>
      <h2 className={`font-sans ${className}`}>{copy}</h2>
    </>
  );
}
