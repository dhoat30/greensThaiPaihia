import React from 'react'
import styled from 'styled-components'
import AnchorLink from '../AnchorLink/AnchorLink'
function MobileFixedButtons(props) {
    return (
        <Container>
            <AnchorLinkStyle link={props.orderOnlineLink} background={true} targetBlank={true}> Order Online </AnchorLinkStyle>
            <AnchorBackground link={`tel: ${props.phoneNumber}`} background={true}> Call Us </AnchorBackground>

        </Container >
    )
}
const Container = styled.section`
@media (min-width: 800px){ 
    display: none;
}
position: fixed;
bottom: 0;
z-index: 100;
width: 100%;
`
const AnchorLinkStyle = styled(AnchorLink)`
width: 50%;
padding: 10px 5px;
&:hover{
    background: var(--green); 
    color: white; 
}
`
const AnchorBackground = styled(AnchorLinkStyle)`
background: #e60023; 
border: 2px solid #e60023;
&:hover{ 
    background: #e60023;
    border: 2px solid #e60023;
    color:white; 
}
`
export default MobileFixedButtons
