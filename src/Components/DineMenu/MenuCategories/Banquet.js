import React from 'react'
import styled from 'styled-components'
import FoodMenuItem from '../../UI/FoodMenuItem/FoodMenuItem'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  allWpFoodMenu(
    filter: {menuCategories: {nodes: {elemMatch: {slug: {eq: "banquets"}}}}}
  ) {
    edges {
      node {
        menuACF {
          dessertItems
          mainCourse
          price
          starterItems
        }
        title
        id
      }
    }
  }
}
`
function Banquet(props) {
  const data = useStaticQuery(query)

  const dataArray = data.allWpFoodMenu.edges.map(data => {
    return {
      title: data.node.title,
      id: data.node.id,
      mainCourse: data.node.menuACF.mainCourse,
      starter: data.node.menuACF.starterItems,
      dessert: data.node.menuACF.dessertItems,
      price: data.node.menuACF.price
    }
  })

  const menuItems = dataArray.map(data => {
    return <FoodMenuItem
      key={data.id}
      title={data.title}
      price={data.price}
      description={data.description}
      mainCourse={data.mainCourse}
      starter={data.starter}
      dessert={data.dessert}
    />
  })
  return (
    <React.Fragment>
      {props.showCategory ? <Container>
        {menuItems}
      </Container> : null}

    </React.Fragment>
  )
}

const Container = styled.div`

`

export default Banquet
