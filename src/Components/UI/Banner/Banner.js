import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import FlowerPattern from '../Pattern/FlowerPattern'

function Banner(props) {
    const bannerImage = getImage(props.bannerData)
    return (
        <Container>
            <GatsbyImageStyle image={bannerImage} alt={props.alt} />
            <FlowerPatternStyle />
        </Container>
    )
}
// hide banner on mobile devices 
const Container = styled.div`
 position: relative;
 background: var(--lightGreen);
 height: 700px;
 margin-top: 100px;
 @media (max-width: 700px){
     display: none;
 }
`

const GatsbyImageStyle = styled(GatsbyImage)`
height: 90vh;
width: 80%;
max-width: 1300px;
max-height: 700px;
left: 50%; 
transform: translate(-50%, 0);
position: absolute;
top: -100px;
z-index: 2;
`

const FlowerPatternStyle = styled(FlowerPattern)`
position: absolute;
top: 50px;
left: 50px;
z-index: 1; 
transform: rotate(-30deg);
`
export default Banner
