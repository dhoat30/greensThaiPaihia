import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/pro-light-svg-icons'

function Accordion(props) {
    const [showContent, setShowContent] = useState(false)
    const toggleHandler = event => {
        setShowContent(showContent ? false : true)
        console.log(showContent)
    }
    let icon = showContent ? faMinus : faPlus
    return (
        <Container onClick={toggleHandler}>
            <TitleContainer>
                <Title>{props.title}</Title>
                <FontAwesomeIcon icon={icon} style={{ fontSize: '20' }} />
            </TitleContainer>
            {showContent ? <ContentContainer>
                <div dangerouslySetInnerHTML={{ __html: props.content }} ></div>
            </ContentContainer> : null}

        </Container>
    )
}

const Container = styled.div`
color: white;
background: var(--green);
padding: 15px 10px;
margin: 0 0 20px 0;
cursor: pointer;
&:hover{
    color:var(--lightGreen);
}
`
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Title = styled.h5`
margin-bottom: 0;
font-weight: 400;
letter-spacing: 0.08rem;
@media(max-width: 500px){
    font-size: 1rem;
}
`
const ContentContainer = styled.div`
margin-top: 10px;
font-weight: 00;
letter-spacing: 0.08rem;
`

export default Accordion
