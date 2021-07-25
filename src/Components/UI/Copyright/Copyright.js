import React from 'react'
import styled from 'styled-components'
import AnchorLinkIcon from '../AnchorLinkIcon/AnchorLinkIcon'
function Copyright(props) {
    return (
        <Container className="row-container">
            <AnchorLinkIcon align="center" icon="1">
                © {props.copyright}

            </AnchorLinkIcon>
            <AnchorLinkIcon align="center" target="_blank" link="https://webduel.co.nz">Built By Web<SpanStyle>Duel </SpanStyle></AnchorLinkIcon>
        </Container>
    )
}

const Container = styled.div`
    border-top: 1px solid var(--green);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 0;
    margin: 20px auto 0 auto;
`

const SpanStyle = styled.div`
    color: var(--green); 
    display: inline;
    font-weight: 700;
`
export default Copyright
