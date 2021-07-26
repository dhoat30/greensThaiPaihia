import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SectionTitle from '../UI/Titles/SectionTitle'
import MenuCard from './MenuCard'
import axios from 'axios'
import MenuLink from './MenuLink'
import Overlay from '../UI/Overlay/Overlay'


function MenuPage() {
    const [dataArray, setDataArray] = useState([])



    // const [showOverlay, setShowOverlay] = useState(false)
    // const [showIndianModal, setShowIndianModal] = useState(false)
    // const [showThaiModal, setShowThaiModal] = useState(false)

    // paihia menu data fetch 
    useEffect(() => {
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/menu_images?_embed`)
            .then(res => {
                setDataArray(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [])


    // thai takeaway 
    const thaiMenu = dataArray.map(data => {
        return {
            menuLink: data.acf.pdf_menu.url,
            image: data._embedded['wp:featuredmedia']['0'].source_url,
            title: data.title.rendered,
            id: data.id
        }
    })
    console.log(dataArray)

    const menuCard = thaiMenu.map(menu => {
        return (
            <React.Fragment key={menu.id}>
                <MenuCard image={menu.image} title={menu.title} link={menu.menuLink} />
            </React.Fragment>
        )
    })


    return (
        <Container className="row-container">

            <SectionTitle> Select Menu</SectionTitle>
            <Flex>
                {
                    menuCard

                }

            </Flex>





        </Container>
    )
}
const Container = styled.section`
padding: 50px 0;
`
const Flex = styled.div`
flex-direction: row;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-direction: row;
`

export default MenuPage
