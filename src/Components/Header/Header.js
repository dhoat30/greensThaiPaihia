import React, { useState, useEffect } from 'react'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import AnchorLink from '../UI/AnchorLink/AnchorLink'
import axios from 'axios'

function Header() {
  const [dataArray, setDataArray] = useState([])
  useEffect(() => {
    axios(`${process.env.WORDPRESS_URL}/wp-json/myroutes/nav-menu`)
      .then(res => {
        setDataArray(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  const firstPartMenu = dataArray.slice(0, 3).map(data => {
    return {
      id: data.ID,
      url: data.url,
      label: data.title
    }
  })
  const secondPartMenu = dataArray.slice(3, 6).map(data => {
    return {
      id: data.ID,
      url: data.url,
      label: data.title
    }
  })
  const mobileMenuArrayData = dataArray.map(data => {
    return {
      id: data.ID,
      url: data.url,
      label: data.title
    }
  })
  return (
    <Container>
      <DesktopNavbar className="row-container">
        <Navbar firstMenuArray={firstPartMenu} />
        <LinkStyle to="/"> <Logo header={true} width="200px" /></LinkStyle>
        <Navbar firstMenuArray={secondPartMenu} />
      </DesktopNavbar>

      <MobileNavbar className="row-container">
        <LinkStyle to="/"> <Logo header={true} width="200px" /></LinkStyle>
        <Navbar firstMenuArray={mobileMenuArrayData} />
      </MobileNavbar>
    </Container>
  )
}

const Container = styled.div`
    background: var(--lightGreen);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media(max-width: 1000px){
        
    }
`
const AnchorLinkStyle = styled(AnchorLink)`
@media(max-width: 1000px){
    display: none;
}
`
const LinkStyle = styled(Link)`
margin: 0 30px;
`
const DesktopNavbar = styled.div`
@media (min-width : 1000px){ 
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
}
display: none;
`

const MobileNavbar = styled.div`
display: none;

 @media (max-width: 1000px){
   display: block;
   display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
z-index: 120;

 }

`
export default Header
