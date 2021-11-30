import { Image } from "react-datocms";

export default function CustomImage({
  data,
  className,
  ariaHidden,
  draggable,
}) {
  if (!data) {
    return <></>;
  }

  if (!data.responsiveImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={data.url}
        alt={data.alt}
        className={className}
        draggable={draggable}
        loading={"lazy"}
        aria-hidden={ariaHidden}
      ></img>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      data={{
        ...data.responsiveImage,
        alt: ariaHidden ? "" : data.alt,
      }}
      className={className}
      fadeInDuration={10}
      lazyLoad={true}
      style={
        className === undefined
          ? { maxWidth: `${data.responsiveImage.width}px`, margin: "auto" }
          : {}
      }
    />
  );
}
