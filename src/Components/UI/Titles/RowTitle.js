import React from 'react'
import styled from 'styled-components'

function RowTitle(props) {
    return (
        <div className={`${props.className} row-container`}>
            <Title color={props.color}>{props.children}</Title>
        </div>
    )
}


const Title = styled.h3`
margin-top: 20px;
 font-size: 2rem;
 color: ${props => props.color ? props.color : "var(--darkGrey)"}; 
 text-transform: uppercase;
 letter-spacing: 0.07rem;
    text-align: center;
    font-family: var(--poppins);
    font-weight: 400;
    @media (max-width: 500px){
        font-size: 1.5rem;
    }
`


export default RowTitle
