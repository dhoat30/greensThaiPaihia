import React, { useState, useEffect } from 'react'
import Carousels from '../../UI/Carousels/Carousels'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/pro-duotone-svg-icons'
import axios from 'axios'

function TestimonialSection() {

  const [dataArray, setDataArray] = useState([])
  useEffect(() => {
    axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/testimonial`)
      .then(res => {
        setDataArray(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])


  const testimonialArray = dataArray.map(data => {
    return {
      title: data.title.rendered,
      id: data.id,
      content: data.acf.testimony
    }
  })
  return (
    <Container>
      <TestimonialBox className="row-container">
        <SectionTitle fontFamily="var(--playfairDisplay)"><FontAwesomeIcon color="var(--green) " icon={faQuoteLeft} size="2x" /></SectionTitle>
        <CarouselsStyle data={testimonialArray} />
      </TestimonialBox>



    </Container>
  )
}

const Container = styled.section`
background-color: var(--lightGreen);
position: relative;
margin-top: -10px;
padding: 100px 0 100px 0;

`
const TestimonialBox = styled.div`
max-width: 1000px;
margin: 0 auto;
`
const CarouselsStyle = styled(Carousels)`
margin-top:50px;
`

export default TestimonialSection
