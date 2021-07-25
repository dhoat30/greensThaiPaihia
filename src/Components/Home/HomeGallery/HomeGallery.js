import React from 'react'
import Gallery from '../../UI/Gallery/Gallery'
import styled from 'styled-components'
import Pattern from '../../UI/Pattern/ElephantPattern'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Button from '../../UI/Button/Button'
const query = graphql`
{
    allWpGallery(limit: 8){
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

function HomeGallery() {
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

      <GalleryContainer className="row-container">
        <SectionTitle>Gallery</SectionTitle>
        <Gallery dataArray={dataArray} />
        <Link to="/gallery"><ButtonStyle align="center">View More </ButtonStyle></Link>
      </GalleryContainer>



    </Container>
  )
}

const Container = styled.section`
position: relative;
background: var(--lightGreen);
padding: 100px 0;
`
const GalleryContainer = styled.div`
z-index: 3;
margin-bottom: 20px;
width: 100%;

`

const ButtonStyle = styled(Button)`
margin: 20px auto 0 auto;
display: block;
`
export default HomeGallery
