import React from 'react'
import ImageCard from '../../UI/ImageCard/ImageCard'
import styled from 'styled-components'
import MediumFonts from '../../UI/Titles/MediumFonts'
import ColumnTitle from '../../UI/Titles/ColumnTitle'
function CardsContent(props) {
    return (
        <Container>
            <ImageContainer>
                <Card>
                    <ImageCard image={props.dataArray[0].firstCardImage} title="Thai Dish" />


                </Card>
                <Card>
                    <ImageCard image={props.dataArray[0].secondCardImage} title="Indian Dish" />
                </Card>
            </ImageContainer>

            <ContentContainer>
                <ContentCard>
                    <ColumnTitleStyle>{props.dataArray[0].history} </ColumnTitleStyle>
                </ContentCard>
                <ContentCard>
                    <MediumFonts>{props.dataArray[0].aboutRestaurant} </MediumFonts>
                </ContentCard>

            </ContentContainer>

        </Container>
    )
}
const Container = styled.div`
margin: 200px 0 100px 0;
background: var(--lightGreen);
`
const ImageContainer = styled.div`
display: flex; 
flex-wrap: wrap;
justify-content: center;
flex-direction: row;
position: relative;
top: -200px;
`
const ContentContainer = styled(ImageContainer)`
top:-150px;
`
const Card = styled.div`
 width: 45%;
max-width: 700px;
 height: 400px;
 overflow: hidden;
 margin: 0 20px 20px 20px;
 @media (max-width: 815px ){ 
    width: 100%;
 }
`
const ContentCard = styled(Card)`
 height: auto;
 margin-bottom: 100px;
`

const ColumnTitleStyle = styled(ColumnTitle)`
margin-top: 0;
`

export default CardsContent
