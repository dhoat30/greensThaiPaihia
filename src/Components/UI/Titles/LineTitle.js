import React from 'react'
import styled from 'styled-components'
function LineTitle(props) {
    return (
        <Section>
            <Container marginTop={props.marginTop}>
                {props.children}
            </Container>
        </Section>

    )
}
const Section = styled.section`
display: flex;
justify-content: center;
`
const Container = styled.div`
    color: var(--green);
    font-size: 2rem;
    text-align: center;
    position: relative;

   display: inline-block;
    margin: ${props => props.marginTop ? '70px auto 0 auto' : '0 auto 0 auto;'};
    z-index: 10; 
    &::before{
        content: "";
        position: absolute;
        width: 110%;
        height: 50px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: var(--darkBlue); 
        z-index: -1;
    }
    &::after{ 
        content: "";
        position: absolute;
        width: 200%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid var(--green);
       z-index: -2;
    }
`

export default LineTitle
