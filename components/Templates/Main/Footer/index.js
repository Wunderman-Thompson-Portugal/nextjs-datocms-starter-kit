import { useRouter } from "next/router";

export default function GenericFooter({ children }) {
  const { route } = useRouter();

  if (route === "/") return <></>;

  return (
    <footer className={`bg-gray-500 p-6`}>
      <div className={`max-w-6xl mx-auto px-4`}>
        <p className={`text-white prose-sm text-sm mt-48 mb-4`}>
          Copyright © 2021 | All rights reserved
        </p>
      </div>
    </footer>
  );
}
