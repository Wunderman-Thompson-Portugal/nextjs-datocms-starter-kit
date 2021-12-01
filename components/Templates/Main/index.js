import GenericHeader from "@/components/Templates/Main/Header";
import GenericFooter from "@/components/Templates/Main/Footer";

export default function MainLayout({ children }) {
  const header = children.props?.siteConfig?.headerConf;

  return (
    <>
      <GenericHeader logotype={header?.logotype}>{children}</GenericHeader>
      <main className={`max-w-6xl mx-auto px-4`}>{children}</main>
      <GenericFooter>{children}</GenericFooter>
    </>
  );
}
