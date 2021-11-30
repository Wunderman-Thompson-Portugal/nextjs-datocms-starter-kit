import Image from "@/components/Atoms/Image";

export default function sectionFeatureProduct(data) {
  return (
    <>
      <div class="py-16">
        <div class="container m-auto px-6">
          <div class="lg:flex justify-between items-center">
            <div class="lg:w-6/12 lg:p-0 p-7">
              <h2 class="text-4xl font-bold leading-tight mb-5 capitalize">
                {" "}
                Professional Tailwind theme designed for developers.{" "}
              </h2>
              <p class="text-xl">
                {" "}
                With Tailwind you can optimized the customization process to
                save your team time when building websites.{" "}
              </p>

              <div class="py-5">
                <a
                  href="#"
                  class="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3"
                >
                  Try for free
                </a>
                <a
                  href="#"
                  class="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black"
                >
                  Requist a demo
                </a>
              </div>
            </div>
            {data.product &&
              data.product.media.map((entry) => (
                <div class="lg:w-5/12 order-2">
                  <Image className={``} data={entry.image} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const fragment = `
    fragment FeatureProductFragment on SectionFeatureProductRecord{
      __typename
      id
      title
      subtitle
      order
      content
      addHeader
      product {
        title
        description
        media{
          ... on PictureRecord {
          id
          image {
            responsiveImage {
              src
            }
          }
          }
        }
        brand {
          tagline
          officialWebsite
          logo {
            url
          }
        }
      }
  }
`;
