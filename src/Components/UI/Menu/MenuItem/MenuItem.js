import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'



function MenuItem(props) {
    return (
        <li>

            {props.anchorTag ?
                <AnchorStyle href={props.menuSlug}>{props.label}</AnchorStyle> :
                <LinkStyle to={props.menuSlug} activeStyle={activeStyle}>
                    {props.children}
                </LinkStyle>
            }




        </li>
    )
}
const activeStyle = {
    color: 'var(--darkGreen)'
}
const AnchorStyle = styled.a`
color: var(--green); 
    margin: 0 20px; 
    &:hover {
        color: var(--lightGreen);
    }
   @media (max-width:1000px){
       padding: 10px 5px;
       display: block;
    
   }
`
const LinkStyle = styled(Link)`

color: var(--green); 
    margin: 0 20px; 
  
    &:hover {
        color: var(--darkGreen);
    }
   @media (max-width:1000px){
       padding: 10px 5px;
       display: block;
    
   }
`
export default MenuItem
