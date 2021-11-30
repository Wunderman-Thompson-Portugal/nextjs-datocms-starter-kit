export default function SectionTextImage(data) {
  return (
    <>
      <p>{data.id}</p>
    </>
  );
}

export const fragment = `
    fragment TextImageFragment on SectionTextImageRecord{
      __typename
      id
     
  }
`;
