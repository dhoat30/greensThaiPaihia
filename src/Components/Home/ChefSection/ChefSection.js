import React from 'react'
import SpecialContent from '../../UI/SpecialContent/SpecialContent'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import MediumFonts from '../../UI/Titles/MediumFonts'
export const query = graphql`
{
    allWpChef {
      edges {
        node {
          id
          chefsACF {
            history
            subtitle
            firstImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 500, height: 600,  transformOptions: {cropFocus: CENTER})
                }
              }
            }
            secondImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 500, height: 600,  transformOptions: {cropFocus: CENTER})
                }
              }
            }
          }
        }
      }
    }
  }
`

function ChefSection() {
  const data = useStaticQuery(query)
  const dataArray = data.allWpChef.edges.map(edge => {
    return {
      id: edge.node.id,
      subtitle: edge.node.chefsACF.subtitle,
      history: edge.node.chefsACF.history,
      firstImage: edge.node.chefsACF.firstImage.localFile.childImageSharp,
      secondImage: edge.node.chefsACF.secondImage.localFile.childImageSharp
    }
  })

  const content = dataArray.map(data => {
    return (<React.Fragment key={data.id}>

      <MediumFonts fontWeight="500">
        {data.subtitle}
      </MediumFonts>
      <MediumFonts>
        {data.history}
      </MediumFonts>
    </React.Fragment>)
  })


  return (
    <Container>
      <SpecialContent
        dataArray={dataArray}
        subTitle="Chef"
        title="Our Chef"
        content={content}
        firstImage={dataArray[0].firstImage}
        secondImage={dataArray[0].secondImage}
      >

      </SpecialContent>
    </Container>
  )
}

const Container = styled.div`
      background: var(--lightGreen);
      padding: 150px 0 50px 0;
      position: relative;
      z-index: 3;
      `

export default ChefSection
