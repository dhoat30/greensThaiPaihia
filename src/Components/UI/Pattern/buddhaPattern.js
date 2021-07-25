import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function BuddhaPattern(props) {
    return (

        <StaticImage className={props.className} src="../../../images/buddha.svg" alt="luxury pattern" placeholder="blurred"
            layout="constrained"
            width={100}
            align={props.align}
        />
    )
}



export default BuddhaPattern
