import GenericHeader from "@/components/Templates/Main/Header";
import GenericFooter from "@/components/Templates/Main/Footer";
import Head from "next/head";

export default function MainLayout({ children }) {
  const header = children.props?.siteConfig?.headerConf;
  const pageMetaTags = children.props?.data._seoMetaTags;
  const siteMetaTags = children.props?.siteConfig._seoMetaTags;
  const siteTitle = siteMetaTags?.filter(meta => meta.tag === 'title')?.map(meta => meta.content)

  return (
    <>
      <Head>
        {
          pageMetaTags?.map((meta, key) => {
            if (meta.tag === 'meta' && meta.attributes !== null) {
              return <meta key={key} name={meta.attributes.property} content={meta.attributes.content} />;
            } else if (meta.tag === 'title') {
              return <title key={key}>{siteTitle} - {meta.content}</title>
            }
          })
        }
      </Head>
      <GenericHeader logotype={header?.logotype}>{children}</GenericHeader>
      <main className={`max-w-6xl mx-auto px-4`}>{children}</main>
      <GenericFooter>{children}</GenericFooter>
    </>
  );
}
