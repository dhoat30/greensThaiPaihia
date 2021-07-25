import React from 'react'
import styled from 'styled-components'
function Overlay(props) {
    return (
        <React.Fragment>
            {props.showOverlay ? <OverlayContainer position={props.position} onClick={props.overlayClick} /> : null}
        </React.Fragment>




    )
}
const OverlayContainer = styled.div`
    position: ${props => props.position === 'absolute' ? 'absolute' : 'fixed'};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 20;
`

export default Overlay
