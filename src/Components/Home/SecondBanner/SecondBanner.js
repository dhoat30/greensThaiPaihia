import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Banner from '../../UI/Banner/Banner'

const query = graphql`
  {
    allWpBanner(
      filter: {bannerCategories: {nodes: {elemMatch: {slug: {eq: "second-home-banner"}}}}}
    ) {
      edges {
        node {
          featuredImage {
            node {
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
function SecondBanner() {
  const data = useStaticQuery(query)

  let imageData
  imageData = data.allWpBanner.edges[0].node.featuredImage.node.localFile.childImageSharp

  return (
    <div>
      <Banner bannerData={imageData} alt="second banner on a home page" />
    </div>
  )
}

export default SecondBanner
