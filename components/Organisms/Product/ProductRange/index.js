export default function ProductRange(data) {
  return (
    <>
      <p>{data.title}</p>
    </>
  );
}

export const fragment = `
    fragment ProductRangeFragment on SectionProductRangeRecord{
      __typename
      id
      title
      subtitle
      addHeader
      products {
        id
        title
        media {
          ... on PictureRecord {
            id
            image {
              responsiveImage {
              ... responsiveImageFragment
              }
      
            }
          }
        }
      }
  }
`;
