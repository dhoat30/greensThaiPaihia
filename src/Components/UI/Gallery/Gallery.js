import React from 'react'
import styled from 'styled-components'
import { SRLWrapper } from "simple-react-lightbox";
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

function Gallery(props) {

    const gallery = props.dataArray.map(data => {
        let image
        if (data.src.localFile) {
            image = getImage(data.src.localFile.childImageSharp)

            return (

                <ImgWrapper key={data.id}>
                    <GatsbyImage className="gallery-image-wrapper" image={image} alt={data.title}></GatsbyImage>
                </ImgWrapper>
            )
        }

    })
    return (
        <Container>
            <SRLWrapper>
                <GalleryWrapper>

                    {gallery}


                </GalleryWrapper>

            </SRLWrapper>
        </Container>
    )
}

const Container = styled.div``
const GalleryWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;
margin-top: 30px;
`
const ImgWrapper = styled.div`
    width: 20%;
    min-width: 280px;
    height: 300px;
    margin: 10px; 
    overflow: hidden;
    cursor: pointer; 

    @media( max-width: 815px){
        width: 100%;
    }
`




export default Gallery
