import dynamic from "next/dynamic";

const LogotypeCard = dynamic(() =>
  import("@/components/Molecules/LogotypeCard").then((c) => c.LogotypeCard)
);

export default function SectionLogotype(data) {
  return (
    <>
      <div class="sm:flex flex-wrap justify-center items-center text-center gap-8 py-12">
        {data.products &&
          data.products.map((entry) => <LogotypeCard data={entry} />)}
      </div>
    </>
  );
}

export const fragment = `
    fragment LogotypeFragment on SectionLogotypeRecord{
      __typename
      id
      title
      products {
        id
        description
        logo {
          id
          url
       
        }
      }
  }
`;
