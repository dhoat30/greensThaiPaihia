import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
function ElephantPattern(props) {
    return (

        <StaticImage className={props.className} src="../../../images/elephant.svg" alt="luxury pattern" placeholder="blurred"
            layout="constrained"
            width={200}

        />
    )
}

export default ElephantPattern
