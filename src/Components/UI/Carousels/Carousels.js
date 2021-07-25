import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import MediumFonts from '../../UI/Titles/MediumFonts'
import ColumnTitle from '../Titles/ColumnTitle'

function Carousels(props) {
    const CarouselItem = props.data.map(data => {
        return (
            <Carousel.Item key={data.id}>
                <MediumFonts align="center">{data.content}</MediumFonts>
                <ColumnTitle align="center">{data.title}</ColumnTitle>


            </Carousel.Item>)
    })
    return (
        <Carousel interval={2000} indicators={true} variant="dark" className={props.className}>
            {CarouselItem}

        </Carousel>


    )
}
// const ItemStyle = styled(Carousel.Item)`
// max-width: 300px;
// margin: 0 auto;
// `

export default Carousels
