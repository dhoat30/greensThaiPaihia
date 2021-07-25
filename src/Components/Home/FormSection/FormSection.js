import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Form from './Form/Form'

function FormSection() {


    return (
        <Container>
            <Content>
                <SectionTitle color="var(--green) ">Book a Table</SectionTitle>
                <Form></Form>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 100px 0;
    position: relative;
    margin: 0 20px;
`

const Content = styled.div`
background: var(--lightGreen);
max-width: 1300px;

margin: 0 auto;
padding: 50px 0;
`

export default FormSection