import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons'
import styled from 'styled-components'
function Loader(props) {
    return (

        <FontStyle className={props.className} alignCenter={props.alignCenter} icon={faSpinnerThird} style={{ fontSize: '40' }} className="fa-spin" />
    )
}

const FontStyle = styled(FontAwesomeIcon)`
color: var(--green);
display: block;
margin: ${props => props.alignCenter ? "20px auto 0 auto" : null} ;
`
export default Loader
