import React from 'react'
import styled from 'styled-components'
import FoodMenuItem from '../../../../UI/FoodMenuItem/FoodMenuItem'
import { graphql, useStaticQuery } from "gatsby"
import LineTitle from '../../../../UI/Titles/LineTitle'


const query = graphql`
{
    allWpFoodMenu(
        filter: {menuCategories: {nodes: {elemMatch: {slug: {eq: "chicken"}}}}}
        sort: {fields: date}
      )  {
      edges {
        node {
          title
          id
          menuACF {
            price
            description
          }
          menuCategories {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  }
`
function ChickenMains() {
  const data = useStaticQuery(query)
  const dataArray = data.allWpFoodMenu.edges.map(data => {
    return {
      title: data.node.title,
      id: data.node.id,
      description: data.node.menuACF.description,
      price: data.node.menuACF.price
    }
  })

  const menuItems = dataArray.map(data => {
    return <FoodMenuItem
      key={data.id}
      title={data.title}
      price={data.price}
      description={data.description}
    />
  })
  return (
    <Container>
      <LineTitle>Chicken Dishes</LineTitle>
      {menuItems}
    </Container>
  )
}

const Container = styled.div``

export default ChickenMains
