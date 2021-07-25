import React from 'react'
import styled from 'styled-components'
function ColumnTitle(props) {
    return (
        <Container
            className={props.className}
            color={props.color}
            align={props.align}
            fontWeight={props.fontWeight}>
            {props.children}
        </Container>
    )
}
const Container = styled.div`
font-weight: ${props => props.fontWeight};
font-family: var(--playfairDisplay);
 font-size: 1.5rem;
 width: auto;
 margin-top: 15px;
 color: ${props => props.color};
 letter-spacing: 0.04rem;
 text-align: ${props => props.align === 'center' ? 'center' : 'left'};
`

export default ColumnTitle
