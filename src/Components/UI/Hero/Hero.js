import AnchorLink from '../AnchorLink/AnchorLink'
import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../Titles/SectionTitle'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ElephantPattern from '../Pattern/ElephantPattern'
import { text } from '@fortawesome/fontawesome-svg-core'

function Hero(props) {
    const desktopImage = getImage(props.data.imageSharp)
    const mobileImage = getImage(props.data.mobileImage)
    return (
        <Container containerHeight={props.containerHeight}>

            {props.textData ?
                <Content className="row-container">
                    <SectionTitle subTitle={props.textData.subtitle} color="var(--green)"> {props.textData.title} </SectionTitle>

                    {props.buttons ?
                        null :
                        <ButtonsContainer>
                            <AnchorLink link={props.textData.orderOnlineLink} background={true} targetBlank={true}> Order Online </AnchorLink>
                            <AnchorLink link={props.textData.bookTable} showIcon={false}>Book a table</AnchorLink>
                        </ButtonsContainer>

                    }

                </Content>
                : null}
            <DesktopGatsbyImage image={desktopImage} alt={props.textData ? props.textData.title : "hero section"} />
            <MobileGatsbyImage image={mobileImage} alt={props.textData ? props.textData.title : "hero section"} />

            <PatternContainer className="row-container">
                <ElephantPatternStyle />
                <ElephantPatternStyle2 />
            </PatternContainer>


        </Container>
    )
}
const Container = styled.div`
position: relative;
background-color: var(--lightGreen);
height: ${props => props.containerHeight ? props.containerHeight : null};
`

const ButtonsContainer = styled.div`
width: 350px;
margin: 0 auto;
 display: flex;
 flex-direction: row;
  align-items: center;
  justify-content:space-around;
@media (max-width: 500px){ 
    flex-direction: column;
    height: 100px;
    width: 200px;
}`

const Content = styled.div`
position: absolute;
top: 20px;
width: 100%;
z-index: 10;
left: 50%; 
transform: translate(-50%,0);
`
const DesktopGatsbyImage = styled(GatsbyImage)`
height: 100%;
max-width: 1386px;
margin: 0 auto;
z-index: 2;
@media (max-width: 850px){
    display: none;
}
`
const MobileGatsbyImage = styled(GatsbyImage)`
@media (max-width: 850px){
    display: block;
}
display: none;
@media (max-width: 400px){ 
    height: 350px;
}
`
const PatternContainer = styled.div`
position: relative;
@media (max-width: 700px){
display: none;
}
`
const ElephantPatternStyle = styled(ElephantPattern)`
z-index: 0;
bottom: 0;
position: absolute;
left: -100px;
`
const ElephantPatternStyle2 = styled(ElephantPattern)`
z-index: 0;
bottom: 0;
position: absolute;
right: -100px;
transform: scaleX(-1);
`
export default Hero
