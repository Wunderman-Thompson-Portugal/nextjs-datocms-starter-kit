export default function SectionTextImage(data) {
  return (
    <>
      <p>{data.content}</p>
    </>
  );
}

export const fragment = `
    fragment TextImageFragment on SectionTextImageRecord{
      __typename
      title
      subtitle
      image {
        id
      }
      id
      cta {
        id
      }
      addHeader
      content
  }
`;
