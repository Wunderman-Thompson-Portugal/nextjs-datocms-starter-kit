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
        <div className="w-full grid grid-cols-2 md:grid-cols-3  px-4 pt-4 pb-4 gap-10">
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
              responsiveImage(imgixParams: { fit:fillmax, fill:solid, crop: focalpoint, auto:format, q:60, w: "320", h:"320"}) {
              ... responsiveImageFragment
              }
      
            }
          }
        }
      }
  }
`;
