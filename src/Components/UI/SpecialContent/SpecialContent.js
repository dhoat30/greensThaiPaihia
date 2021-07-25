import React from 'react'
import styled from 'styled-components'
import OverlayTitle from '../Titles/OverlayTitle'
import ImageCard from '../../UI/ImageCard/ImageCard'
import { Link } from 'gatsby'
function SpecialContent(props) {

    return (
        <Container className={props.className}>
            <OverlayTitle subTitle={props.subTitle}> {props.title} </OverlayTitle>

            <DishesContainer className="row-container">
                <Content>
                    {props.content}
                    {props.link ? <LinkStyle to={props.link}>View Menu</LinkStyle> : null}
                </Content>

            </DishesContainer>
            <ImageCardFirst key="1265" image={props.firstImage} title="Special Content" />
            <ImageCardSecond key="1253" image={props.secondImage} title="Special Content" />

        </Container>
    )
}
const Container = styled.div`
position: relative;
`
const DishesContainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;

`
const Content = styled.div`
max-width: 350px;
margin-top: 30px;
`
const ImageCardFirst = styled(ImageCard)`
position: absolute;
width: 100%;
max-width: 450px;
bottom: -100px;
@media (max-width: 1400px){
    width: 100%;
max-width: 350px;
height: 500px;
}
@media (max-width: 1100px){
    width: 100%;
max-width: 250px;
height: 500px;
}
@media (max-width: 900px){
  display: none;
}
`
const ImageCardSecond = styled(ImageCard)`
position: absolute;
top: -100px;
right: 0;
width: 100%;
max-width: 450px;
@media (max-width: 1400px){
    width: 100%;
max-width: 350px;
height: 500px;
}
@media (max-width: 1100px){
    width: 100%;
max-width: 250px;
height: 500px;
}
@media (max-width: 900px){
  display: none;
}
`

const LinkStyle = styled(Link)`
color: var(--darkGrey);
 font-weight: 300;
 font-size: 1.2rem;
border-bottom: 1px solid var(--darkGrey);
&:hover{ 
    color: var(--green);
    border-bottom: 1px solid var(--green);

}
`

export default SpecialContent
