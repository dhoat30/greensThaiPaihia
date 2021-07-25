import React from 'react'
import Gallery from '../UI/Gallery/Gallery'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import SectionTitle from '../UI/Titles/SectionTitle'

const query = graphql`
{
    allWpGallery {
      totalCount
      edges {
        node {
          id
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`

function GalleryPage() {
  const data = useStaticQuery(query)

  const dataArray = data.allWpGallery.edges.map(edge => {
    if (edge.node.featuredImage.node !== null) {
      return {
        title: edge.node.title,
        id: edge.node.id,
        src: edge.node.featuredImage.node
      }
    }

  })

  return (
    <Container>
      <SectionTitle>
        Gallery
      </SectionTitle>
      <GalleryContainer>
        <Gallery dataArray={dataArray} />

      </GalleryContainer>



    </Container>
  )
}

const Container = styled.section`
position: relative;
padding: 100px;
`
const GalleryContainer = styled.div`
position: relative;
z-index: 3;
`

export default GalleryPage
