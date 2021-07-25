import React from 'react'
import FruitPattern from '../../UI/Pattern/FruitPattern'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import RowTitle from '../../UI/Titles/RowTitle'

const query = graphql`
  {
    allWpSlogan(
      filter: {sloganCategories: {nodes: {elemMatch: {slug: {eq: "home-page"}}}}}
    ) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`
function SloganSection() {
  const data = useStaticQuery(query)
  const dataArray = data.allWpSlogan.edges.map(edge => {
    return {
      title: edge.node.title,
      id: edge.node.id
    }
  })



  return (
    <Container >
      <FruitPattern />
      <RowTitle color="var(--darkGrey)">{dataArray[0].title}</RowTitle>
    </Container>
  )
}

const Container = styled.div`
background-color: var(--lightGreen);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
`
export default SloganSection
