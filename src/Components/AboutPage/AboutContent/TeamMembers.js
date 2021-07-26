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
                    <ImageCardStyle image={props.dataArray[0].chefImage} title="Indian Dish" />
                    <ColumnTitle> {props.dataArray[0].chefName} – {props.dataArray[0].chefDesignation}</ColumnTitle>
                    <MediumFonts>{props.dataArray[0].chefContent} </MediumFonts>

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
