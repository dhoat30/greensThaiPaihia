import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

const Container = styled.button`    
    margin: ${props => props.margin ? '10px' : null};
    letter-spacing: var(--letterSpacing);
    border: 2px solid var(--green);
    padding: 10px 30px 10px 20px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    text-transform: uppercase;
    cursor: pointer;
    background: ${props => props.background ? "var(--green)" : "none"};    
    color: ${props => props.background ? "white" : "var(--green)"};

    &:hover{
        background: ${props => !props.background ? "var(--green)" : "none"};
       
        color: ${props => !props.background ? "white" : "var(--green)"};
        border: 2px solid var(--green);

}
`
function Button(props) {
    const buttonClasses = props.active ? `${props.className} button-active` : `${props.className}`

    return (
        <Container onClick={props.buttonClick} background={props.background} className={buttonClasses} margin={props.margin}>
            {props.children}
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '20' }} className="button-arrow" />
        </Container>
    )
}

export default Button
