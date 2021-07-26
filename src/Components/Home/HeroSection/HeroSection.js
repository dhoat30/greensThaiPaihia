import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../../UI/Hero/Hero'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
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
  // api data
  const [dataArray, setDataArray] = useState([])
  useEffect(() => {
    axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/slider`)
      .then(res => {
        setDataArray(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])


  const acfData = dataArray.map(data => {
    return {
      title: data.acf.title,
      subtitle: data.acf.sub_title,
      phoneNumber: data.acf.phone_number,
      orderOnlineLink: data.acf.order_online_link,
      bookTable: "#book-table"
    }
  })
  console.log(acfData[0])
  // Graph ql data 
  const data = useStaticQuery(query)

  const graphDataArray = data.allWpSlider.edges.map(edge => {
    return {
      id: edge.node.id,
      imageSharp: edge.node.featuredImage.node.localFile.childImageSharp,
      mobileImage: edge.node.sliderACF.mobileImage.localFile.childImageSharp
    }
  })
  const HeroComponent = graphDataArray.map((data, index) => {
    console.log(index)
    return (
      <Carousel.Item key={data.id}>
        <Hero data={data} textData={acfData[index]} />
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
