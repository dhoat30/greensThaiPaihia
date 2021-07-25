import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import OverlayTitle from '../../UI/Titles/OverlayTitle'
function ExtraInfo() {
    const [dataArray, setDataArray] = useState([])
    // using use effect so it won't keep re running on state change
    useEffect(() => {
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/info`)
            .then(res => {
                setDataArray(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    const info = dataArray.map(data => {
        return (
            <React.Fragment key="1123">
                <OverlayTitle key="12" size="small" subTitle={data.acf.total_menu_options}> Dinner Options </OverlayTitle>
                <OverlayTitle key="13" size="small" subTitle={data.acf.number_of_table}> Number Of Tables</OverlayTitle>
                <OverlayTitle key="14" size="small" subTitle={data.acf.experience_}> Years Of Experience</OverlayTitle>
                <OverlayTitle key="15" size="small" subTitle={data.acf.happy_guests}> Happy Guests</OverlayTitle>
            </React.Fragment>

        )
    })

    return (
        <Container className="row-container">
            <Flex>
                {info}
            </Flex>
        </Container>
    )
}

const Container = styled.section`
padding-top: 200px ; 
padding-bottom: 50px;
`
const Flex = styled.div`
/* max-width: 300px;
min-width: 250px; */
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`

export default ExtraInfo
