import dynamic from "next/dynamic";

const SubSectionHeader = dynamic(() =>
  import("@/components/Molecules/SubSectionHeader").then(
    (c) => c.SubSectionHeader
  )
);

const ProductCard = dynamic(() =>
  import("@/components/Molecules/ProductCard").then((c) => c.ProductCard)
);

export default function ProductRange(data) {
  return (
    <>
      <SubSectionHeader data={data} />
      {data.products && (
        <div className="w-full flex flex-row px-4 pt-12 pb-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
          {data.products.map((entry) => (
            <ProductCard key={entry.id} data={entry} />
          ))}
        </div>
      )}
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
