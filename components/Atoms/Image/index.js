import { Image } from 'react-datocms'
// import cn from 'classnames'

export default function CustomImage({ data, className, ariaHidden, draggable }) {

    if ( ! data ) {
        return <></>
    }

    if ( ! data.responsiveImage ) {
        return <img src={data.url} className={className} draggable={draggable} loading={'lazy'} aria-hidden={ariaHidden}></img>
    }

    return (
        <Image
            data={{
                ...data.responsiveImage,
                alt: ariaHidden ? '' : data.alt,
            }}
            className={className}
            fadeInDuration={10}
            lazyLoad={true}
            style={className === undefined ? {maxWidth: `${data.responsiveImage.width}px`, margin: 'auto'} : {}}
        />
    )
}
