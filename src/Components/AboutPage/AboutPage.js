import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import AboutContent from './AboutContent/AboutContent'
import Hero from '../UI/Hero/Hero'
const query = graphql`
{
  allWpPage(filter: {slug: {eq: "about"}}) {
    totalCount
    edges {
      node {
        aboutUsACF {
          aboutRestaurant
          historyContent
          introductionContent
          restaurantManagerContent
          restaurantManagerName
          chefContent
          chefDesignation
          chefName
          chefImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
          secondCardImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
          restaurantManagerImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
          mobileHeroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: FIXED)
              }
            }
          }
          
          firstCardImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: FIXED)
              }
            }
          }
        }
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH, height: 500)
              }
            }
          }
        }
      }
    }
  }
}
`

function AboutPage() {
  const data = useStaticQuery(query)

  const dataArray = data.allWpPage.edges.map(data => {
    return {
      imageSharp: data.node.featuredImage.node.localFile.childImageSharp,
      mobileImage: data.node.aboutUsACF.mobileHeroImage.localFile.childImageSharp,
      introductionContent: data.node.aboutUsACF.introductionContent,
      firstCardImage: data.node.aboutUsACF.firstCardImage.localFile.childImageSharp,
      secondCardImage: data.node.aboutUsACF.secondCardImage.localFile.childImageSharp,
      history: data.node.aboutUsACF.historyContent,
      aboutRestaurant: data.node.aboutUsACF.aboutRestaurant,
      chefName: data.node.aboutUsACF.chefName,
      chefDesignation: data.node.aboutUsACF.chefDesignation,
      chefContent: data.node.aboutUsACF.chefContent,
      chefImage: data.node.aboutUsACF.chefImage.localFile.childImageSharp,
      restaurantManagerName: data.node.aboutUsACF.restaurantManagerName,
      restaurantManagerDesignation: "Restaurant Manager",
      restaurantManagerContent: data.node.aboutUsACF.restaurantManagerContent,
      restaurantManagerImage: data.node.aboutUsACF.restaurantManagerImage.localFile.childImageSharp,
      id: data.node.id,
      title: "About Us"
    }
  })
  const HeroComponent = dataArray.map(data => {
    return (
      <Hero containerHeight="500px" buttons={false} key={data.id} data={data} />
    )

  })
  return (
    <Container>
      {HeroComponent}
      <AboutContent dataArray={dataArray} />
    </Container>
  )
}
const Container = styled.section`

margin-bottom: -10px;

`
export default AboutPage
