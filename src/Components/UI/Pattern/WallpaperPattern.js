import React from 'react'
import img from "../../../images/wallpaper-pattern.jpg"
import styled from 'styled-components'
function WallpaperPattern(props) {
    return (
        <div>
            {props.img ?

                <ImgStyle className={props.className} src={img} alt="wallpaper pattern " />

                :
                <BackgroundImage style={{ backgroundImage: `url(${img})` }}></BackgroundImage>

            }


        </div >

    )
}
const BackgroundImage = styled.div`
width : 100%; 
height: 600px;
background-repeat: repeat;
`
const ImgStyle = styled.img`
 border-radius: 50%;
`
export default WallpaperPattern
