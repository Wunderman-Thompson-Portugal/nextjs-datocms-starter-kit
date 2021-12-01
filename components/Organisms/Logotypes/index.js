import dynamic from "next/dynamic";

const LogotypeCard = dynamic(() =>
  import("@/components/Molecules/LogotypeCard").then((c) => c.LogotypeCard)
);

const SubSectionHeader = dynamic(() =>
  import("@/components/Molecules/SubSectionHeader").then(
    (c) => c.SubSectionHeader
  )
);

export default function SectionLogotype(data) {
  return (
    <>
      <div className="my-24">
        <SubSectionHeader data={data} />
        <div className="sm:flex flex-wrap justify-center items-top text-center gap-x-10 gap-y-5">
          {data.products &&
            data.products.map((entry) => (
              <LogotypeCard key={entry.id} data={entry} />
            ))}
        </div>
      </div>
    </>
  );
}

export const fragment = `
    fragment LogotypeFragment on SectionLogotypeRecord{
      __typename
      id
      title
      subtitle
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
