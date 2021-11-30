export default function sectionFeatureProduct(data) {
  return (
    <>
      <p>{data.title}</p>
    </>
  );
}

export const fragment = `
    fragment FeatureProductFragment on SectionFeatureProductRecord{
      __typename
      id
      title
  }
`;
