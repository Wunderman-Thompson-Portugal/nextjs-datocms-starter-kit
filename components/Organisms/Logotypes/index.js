export default function SectionLogotype(data) {
  return (
    <>
      <p>{data.title}</p>
    </>
  );
}

export const fragment = `
    fragment LogotypeFragment on SectionLogotypeRecord{
      __typename
      id
      title
  }
`;
