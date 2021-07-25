import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ColumnTitle from '../../UI/Titles/ColumnTitle'
function USP() {
    const [uspDataArray, setUspDataArray] = useState([])
    useEffect(() => {
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/usp?_embed`)
            .then(res => {
                setUspDataArray(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const uspDataObject = uspDataArray.map(data => {

        return {
            title: data.title.rendered,
            image: data._embedded['wp:featuredmedia']['0'].source_url,
            content: data.content.rendered,
            id: data.id
        }
    })


    const card = uspDataObject.map(data => {
        return (
            <Card key={data.id}>
                <Img src={data.image} alt={data.title}></Img>
                <ColumnTitle align="center">{data.title} </ColumnTitle>
                <Paragraph dangerouslySetInnerHTML={{ __html: data.content }}></Paragraph>
            </Card>
        )
    })

    return (

        <Container className="row-container">

            <Flex>

                {card}

            </Flex>
        </Container>


    )
}

const Container = styled.section`
 padding: 100px 0;
`
const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap; 
justify-content: space-around ;
align-items: flex-end;
`
const Card = styled.div`
 max-width: 300px;
 min-width: 300px;
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 align-items: center;
 justify-content: flex-end;
 margin: 20px;
`
const Paragraph = styled.p`
color: var(--darkGrey);
text-align: center;
font-weight: 300;
line-height: 1.8rem;
letter-spacing: 0.05rem;
font-size: 1.1rem;
`
const Img = styled.img`
width: 150px;
height: 150px;
object-fit:scale-down;
`
export default USP
