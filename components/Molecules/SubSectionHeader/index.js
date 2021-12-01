import dynamic from "next/dynamic";

const HeadlineH2 = dynamic(() =>
  import("@/components/Atoms/Title").then((c) => c.HeadlineH2)
);

const Subtitle = dynamic(() =>
  import("@/components/Atoms/Subtitle").then((c) => c.Subtitle)
);

export function SubSectionHeader(props) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6  z-20">
          <HeadlineH2
            copy={props.data.title}
            className="text-3xl font-sans font-extrabold text-black dark:text-white sm:text-4xl"
          />
          <Subtitle
            copy={props.data.subtitle}
            className=" mt-6 text-base font-sans  block  max-w-[80%] mx-auto"
          />
        </div>
      </div>
    </>
  );
}
