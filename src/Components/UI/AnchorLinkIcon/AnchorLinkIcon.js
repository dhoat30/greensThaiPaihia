import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/pro-duotone-svg-icons'
import { faFacebook, faTripadvisor } from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components'

function AnchorLinkIcon(props) {
    let iconStyle

    switch (props.icon) {
        case "faPhoneAlt":
            iconStyle = faPhoneAlt
            break

        case "faMapMarkerAlt":
            iconStyle = faMapMarkerAlt
            break

        case "faEnvelope":
            iconStyle = faEnvelope
            break

        case "faFacebook":
            iconStyle = faFacebook
            break

        case "faTripadvisor":
            iconStyle = faTripadvisor
            break

        case "faClock":
            iconStyle = faClock
            break

        default:
            iconStyle = null
    }

    return (

        <AnchorLink target={props.target} size={props.size} href={props.link}>
            {iconStyle !== null ?
                <FontAwesomeIcon icon={iconStyle} />
                : null
            }

            <SpanStyle align={props.align}>  {props.children}</SpanStyle>
        </AnchorLink>

    )
}
const AnchorLink = styled.a`
   font-size: ${props => props.size ? props.size : "1rem"};
 font-family: var(--poppins);
 font-weight: 300;
 color: var(--green);
 display: block;
 &:hover{ 
   color: var(--darkGrey);
   cursor: pointer;
 }
`
const SpanStyle = styled.span`
margin-left: 5px;
text-align: ${props => props.align === "center" ? "center" : "left"};

`
export default AnchorLinkIcon
