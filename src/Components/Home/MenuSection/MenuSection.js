import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import ColumnTitle from '../../UI/Titles/ColumnTitle'
import MediumFonts from '../../UI/Titles/MediumFonts'
import axios from 'axios'
import SpecialContent from '../../UI/SpecialContent/SpecialContent'

const query = graphql`
{
  allWpMenuImage(filter: {}, skip: 2, sort: {fields: date, order: DESC}) {
    edges {
      node {
        id
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: BLURRED
                  width: 500
                  height: 600
                  transformOptions: {cropFocus: CENTER}
                )
              }
            }
          }
        }
      }
    }
  }
}

`
function MenuSection() {
  const [menuArray, setMenuArray] = useState([])
  // let menuItemsArray
  // using use effect so it won't keep re running on state change
  useEffect(() => {
    axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/menu?menu-category-slug=home-page`)
      .then(res => {
        setMenuArray(res.data)
      }).catch(err => {
        console.log(err)
      })

    // fetch images 
  }, [])

  // rendered items array 
  const menuItems = menuArray.map(data => {
    return (<React.Fragment key={data.id}>
      <ColumnTitle
        color="var(--darkGrey)"
        fontWeight="regular">
        {data.title.rendered}
      </ColumnTitle>
      <MediumFonts>
        {data.acf.description}
      </MediumFonts>
    </React.Fragment>)
  })


  //GraphQl query for images  
  const data = useStaticQuery(query)
  const dataArray = data.allWpMenuImage.edges.map(edge => {
    if (edge.node.featuredImage.node.localFile) {
      return {
        id: edge.node.id,
        title: edge.node.title.toUpperCase(),
        image: edge.node.featuredImage.node.localFile.childImageSharp
      }
    }
  })

  return (
    <Container>
      <SpecialContent
        dataArray={dataArray}
        title="Our Specials"
        subTitle="Menu"
        content={menuItems}
        firstImage={dataArray[0].image}
        secondImage={dataArray[1].image}
        link="/menu"
      />

    </Container>
  )
}
const Container = styled.div`
      background: var(--lightGreen);
      padding: 150px 0 50px 0;
      position: relative;
      z-index: 3;
      `
const Flex = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      `

export default MenuSection
