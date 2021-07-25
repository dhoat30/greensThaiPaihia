import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../../UI/Hero/Hero'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

const query = graphql`
{
  allWpSlider(
    filter: {sliderCategories: {nodes: {elemMatch: {slug: {eq: "home-page"}}}}}
    sort: {fields: date}
  ) {
    edges {
      node {
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
        sliderACF {
          title
          subTitle
          phoneNumber
          orderOnlineLink
          mobileImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
}
`

function HeroSection() {

  const data = useStaticQuery(query)

  const dataArray = data.allWpSlider.edges.map(edge => {
    return {
      title: edge.node.sliderACF.title,
      id: edge.node.id,
      subtitle: edge.node.sliderACF.subTitle,
      phoneNumber: edge.node.sliderACF.phoneNumber,
      orderOnlineLink: edge.node.sliderACF.orderOnlineLink,
      imageSharp: edge.node.featuredImage.node.localFile.childImageSharp,
      mobileImage: edge.node.sliderACF.mobileImage.localFile.childImageSharp
    }
  })

  const HeroComponent = dataArray.map(data => {
    return (
      <Carousel.Item key={data.id}>
        <Hero data={data} />
      </Carousel.Item>

    )

  })

  return (

    <Container>
      <Carousel variant="dark">


        {HeroComponent}

      </Carousel>

    </Container>




  )
}

const Container = styled.section`
position: relative;
background-color: var(--lightGreen);
`

export default HeroSection
