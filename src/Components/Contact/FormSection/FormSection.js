import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Form from './Form/Form'

function FormSection() {


    return (
        <Container>

            <SectionTitle color="var(--green) ">Contact Us</SectionTitle>
            <Form></Form>
        </Container>

    )
}

const Container = styled.div`
    background: var(--lightGreen);
    padding: 100px 20px;
    position: relative;
    width: 100%;
    min-width: 600px;
    margin-bottom: 100px;
`
const PatternContainer = styled.div`
position: absolute;
@media (max-width: 900px){
    display: none;
}
`

export default FormSection