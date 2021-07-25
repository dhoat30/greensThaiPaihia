import React from 'react'
import FormSection from './FormSection/FormSection'
import styled from 'styled-components'
function Contact() {
    return (
        <Container>
            <Flex className="row-container">
                <IFrameStyle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.755445470458!2d174.12030761549858!3d-35.26233938029398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0ba569d0d12775%3A0x7998c264e3d836ad!2sGREEN&#39;S%20Russell%20-%20Indian%20%26%20Thai%20Cuisine!5e0!3m2!1sen!2sin!4v1627146372061!5m2!1sen!2sin" style={{ border: '0' }} allowfullscreen="" loading="lazy"></IFrameStyle>
                <FormSection />
            </Flex>

        </Container>
    )
}
const Container = styled.section`
`
const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items : center ;
justify-content: center;
`
const IFrameStyle = styled.iframe`
padding: 100px 0;
display: block;
width: 100%;
height: 700px;
min-width: auto;

`
export default Contact
