import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function FruitPattern(props) {
    return (

        <StaticImage className={props.className} src="../../../images/fruit.svg" alt="luxury pattern" placeholder="blurred"
            layout="constrained"
            width={200}

        />
    )
}

export default FruitPattern
