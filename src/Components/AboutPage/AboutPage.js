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
          indianChefContent
          indianChefDesignation
          indianChefs
          introductionContent
          restaurantManagerContent
          restaurantManagerName
          thaiChefContent
          thaiChefDesignation
          thaiChefName
          thaiChefImage {
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
          indianChefImage {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
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
      indianChefName: data.node.aboutUsACF.indianChefs,
      indianChefDesignation: data.node.aboutUsACF.indianChefDesignation,
      indianChefContent: data.node.aboutUsACF.indianChefContent,
      indianChefImage: data.node.aboutUsACF.indianChefImage.localFile.childImageSharp,
      thaiChefName: data.node.aboutUsACF.thaiChefName,
      thaiChefDesignation: data.node.aboutUsACF.thaiChefDesignation,
      thaiChefContent: data.node.aboutUsACF.thaiChefContent,
      thaiChefImage: data.node.aboutUsACF.thaiChefImage.localFile.childImageSharp,
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
