import React from 'react'
import ImageCard from '../../UI/ImageCard/ImageCard'
import styled from 'styled-components'
import MediumFonts from '../../UI/Titles/MediumFonts'
import ColumnTitle from '../../UI/Titles/ColumnTitle'
function TeamMembers(props) {
    return (
        <Container>
            <ImageContainer>
                <Card>
                    <ImageCardStyle image={props.dataArray[0].indianChefImage} title="Thai Dish" />
                    <ColumnTitle> {props.dataArray[0].indianChefName} – {props.dataArray[0].indianChefDesignation} </ColumnTitle>
                    <MediumFonts>{props.dataArray[0].indianChefContent} </MediumFonts>
                </Card>
                <Card>
                    <ImageCardStyle image={props.dataArray[0].thaiChefImage} title="Indian Dish" />
                    <ColumnTitle> {props.dataArray[0].thaiChefName} – {props.dataArray[0].thaiChefDesignation}</ColumnTitle>
                    <MediumFonts>{props.dataArray[0].thaiChefContent} </MediumFonts>

                </Card>
                <Card>
                    <ImageCardStyle image={props.dataArray[0].restaurantManagerImage} title="Indian Dish" />
                    <ColumnTitle> {props.dataArray[0].restaurantManagerName} – Restaurant Manager </ColumnTitle>
                    <MediumFonts>{props.dataArray[0].restaurantManagerContent} </MediumFonts>


                </Card>
            </ImageContainer>
        </Container>
    )
}

const Container = styled.div`
`
const ImageContainer = styled.div`
display: flex; 
flex-wrap: wrap;
justify-content: center;
flex-direction: row;
position: relative;
top: -250px;
margin-bottom:-150px;
`
const ImageCardStyle = styled(ImageCard)`
height: 500px;
`
const Card = styled.div`
 width: 40%;
max-width: 700px;
 margin: 50px 20px 20px 20px;
 @media (max-width: 815px ){ 
    width: 100%;
 }
`
export default TeamMembers
