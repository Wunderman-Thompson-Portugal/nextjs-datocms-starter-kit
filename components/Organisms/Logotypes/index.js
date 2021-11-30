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
      <SubSectionHeader data={data} />
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 ">
        {data.products &&
          data.products.map((entry) => (
            <LogotypeCard key={entry.id} data={entry} />
          ))}
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
