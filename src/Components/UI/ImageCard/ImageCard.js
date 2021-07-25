import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

function ImageCard(props) {
    const image = getImage(props.image)

    return (

        <GatsbyImage image={image} alt={props.title}
            className={props.className}
        />
    )
}

export default ImageCard
