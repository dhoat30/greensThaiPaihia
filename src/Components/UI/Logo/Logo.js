import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
{
  allWpInformation {
    edges {
      node {
        informationACF {
          logo {
            localFile {
              id
              childImageSharp {
                id
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
}
`
function Logo(props) {
  const data = useStaticQuery(query)
  const logo = getImage(data.allWpInformation.edges[0].node.informationACF.logo.localFile)
  return (
    <Container mobileWidth={props.mobileWidth} width={props.width} >
      <GatsbyImage image={logo} alt="Delhi 6 Logo"></GatsbyImage>
    </Container>
  )
}
const Container = styled.div`
@media(max-width: 1000px){
  width: ${props => props.mobileWidth ? props.mobileWidth : '100px'}
 
}
margin: 0 auto;
width: ${props => props.width ? props.width : '90px'};
`
export default Logo
