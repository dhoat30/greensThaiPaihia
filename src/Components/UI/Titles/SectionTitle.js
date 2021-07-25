import React from 'react'
import styled from 'styled-components'

function SectionTitle(props) {
    return (
        <div className={props.className}>
            <SubTitle color={props.color} id={props.id}>{props.subTitle}</SubTitle>
            <Title color={props.color}>{props.children}</Title>
        </div>
    )
}

const SubTitle = styled.h4`
    color: var(--darkGrey); 
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: var(--poppins);
    letter-spacing: 0.2rem;
    @media (max-width: 500px){
        font-size: 1rem;
    }
`
const Title = styled.h3`
 font-size: 3rem;
 color:  ${props => props.color};
 text-transform: uppercase;
 letter-spacing: 0.2rem;
    text-align: center;
    font-family: var(--playfairDisplay);
    font-weight: 400;
    @media (max-width: 500px){
        font-size: 2rem;
    }
`


export default SectionTitle
