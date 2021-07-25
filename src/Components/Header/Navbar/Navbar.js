import React, { useState } from 'react'
import Menu from '../../UI/Menu/Menu'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/pro-light-svg-icons'





function Navbar(props) {
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const [hamburgerIconShow, setHamburgerIconShow] = useState(true)



  const clickHandler = (event) => {
    setMobileMenuShow(true)
    setHamburgerIconShow(false)
  }

  const closeClickHandler = () => {
    setMobileMenuShow(false)
    setHamburgerIconShow(true)
  }

  const Icon = hamburgerIconShow ? <IconStyle icon={faBars} onClick={clickHandler}></IconStyle> : <IconStyle icon={faTimes} onClick={closeClickHandler}></IconStyle>;
  return (
    <React.Fragment>


      <DesktopContainer>

        <Menu flexRow={true}
          menuArray={props.firstMenuArray}
          home={false} />
      </DesktopContainer>

      <MobileContainer>
        {Icon}
        {mobileMenuShow ? <Menu
          orderOnline={props.orderOnline}
          mobileMenu={true}
          flexRow={false}
          menuArray={props.firstMenuArray}
          home={false} /> : null}
      </MobileContainer>
    </React.Fragment>

  )
}

const DesktopContainer = styled.div`
 width: 100%;
  @media(max-width: 1000px){
    display: none;
  }
`

const MobileContainer = styled.div`
display: none;
@media(max-width: 1000px){
  display: block;
}
`

const IconStyle = styled(FontAwesomeIcon)`
font-size: 35px; 
color: var(--green);
position: absolute;
top: 8px;
right: 20px;
`

export default Navbar
