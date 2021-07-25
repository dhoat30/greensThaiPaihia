import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../Titles/ColumnTitle'
import MediumFonts from '../Titles/MediumFonts'

function FoodMenuItem(props) {
    return (
        <Container>
            <Dish>
                <DishName>
                    <ColumnTitleStyle fontWeight="regular">{props.title}</ColumnTitleStyle>
                    <Line></Line>
                    <ColumnTitleStyle color="white">
                        {props.mainCourse ? "Per Person " : null}
                        ${props.price}
                    </ColumnTitleStyle>
                </DishName>
                <DishDescription>
                    <MediumFonts color="white"> {props.description} </MediumFonts>
                    {props.starter ? <MediumFonts color="white"> <span className="medium">STARTER: </span>{props.starter} </MediumFonts> : null}
                    {props.mainCourse ? <MediumFonts color="white"> <span className="medium">MAINS: </span>{props.mainCourse} </MediumFonts> : null}
                    {props.dessert ? <MediumFonts color="white"> <span className="medium">DESSERT: </span>{props.dessert} </MediumFonts> : null}
                </DishDescription>
            </Dish>
        </Container>
    )
}
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const Dish = styled.div`
margin-top: 35px;
`
const DishName = styled.div`
@media(max-width: 900px){
    display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 
 flex-wrap: wrap;
 flex-direction: column;
}
 
`


const Line = styled.div`
     display: table-cell;
    width: 98%;
    border-bottom: 1px solid var(--green);
    position: relative;
    bottom: 8px;
    @media(max-width: 900px){
    display: none;
}
    &::before{
        content: '';
    position: absolute;
    bottom: 5px;
    width: 100%;
    border-bottom: 1px solid var(--green);

    }

`
const ColumnTitleStyle = styled(ColumnTitle)`
@media(min-width: 900px){

    display: table-cell;
    width: 1%;
    white-space: nowrap;
    padding-right: 10px;
    padding-left: 10px;
}
   margin: 0;
`


const DishDescription = styled.div`
padding: 0 0 0 10px;
margin-top: 5px;
`

export default FoodMenuItem
