import React from 'react'
import styled from 'styled-components'
import MediumFonts from '../UI/Titles/MediumFonts'

function MenuCard(props) {
    return (
        <React.Fragment >
            <Card href={props.link} target="_blank">
                <ImgContainer>
                    <ImgStyle src={props.image} alt="takeaway menu"></ImgStyle>
                </ImgContainer>
                <MediumFontsStyle> {props.title} </MediumFontsStyle>
            </Card>
        </React.Fragment>

    )
}


const Card = styled.a`
margin-top: 40px;

text-decoration: none;
color: var(--darkGrey);
width: 49%; 
cursor: pointer;
@media (max-width: 600px ){
    width: 100%;
}
&:hover{ 
    color: var(--darkGrey);
}
`
const ImgContainer = styled.div`
overflow: hidden;
height: 300px
`
const ImgStyle = styled.img`
width: 100%;
transition: var(--transition);
&:hover{
    transform: scale(1.2);
}
`
const MediumFontsStyle = styled(MediumFonts)`
 line-height: 1.5rem;
 text-transform: uppercase;
 border-bottom: 1px solid var(--darkGrey);
 display: inline-block;
 margin: 10px auto !important;
 position: relative;
 left: 50%;
 transform: translate(-50%, 0 );
 `
export default MenuCard
