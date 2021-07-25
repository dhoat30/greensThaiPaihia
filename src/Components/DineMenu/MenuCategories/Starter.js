import React from 'react'
import styled from 'styled-components'
import FoodMenuItem from '../../UI/FoodMenuItem/FoodMenuItem'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    allWpFoodMenu(
        filter: {menuCategories: {nodes: {elemMatch: {slug: {eq: "starter"}}}}}
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
function Starter(props) {
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
        <React.Fragment>
            {props.showCategory ? <Container>
                {menuItems}
            </Container> : null}

        </React.Fragment>
    )
}

const Container = styled.div`

`

export default Starter
