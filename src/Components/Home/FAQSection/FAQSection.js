import React, { useState, useEffect } from 'react'
import Accordion from '../../UI/Accordion/Accordion'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import axios from 'axios'

function FAQSection() {

  const [dataArray, setDataArray] = useState([])
  useEffect(() => {
    axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/faq`)
      .then(res => {
        setDataArray(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  const accordion = dataArray.map(data => {
    return <Accordion key={data.id} title={data.title.rendered} content={data.content.rendered} />;
  })
  return (
    <React.Fragment>
      {accordion.length > 0 ?
        <Container>
          <Box>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <AccordionContainer>

              {accordion}
            </AccordionContainer>
          </Box>

        </Container> : null
      }
    </React.Fragment>

  )
}

const Container = styled.section`
`
const Box = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
width: 95%;
padding: 100px 0;
`
const AccordionContainer = styled.div`
margin: 40px 0 0 0;
`

export default FAQSection
