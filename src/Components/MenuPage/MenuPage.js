import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SectionTitle from '../UI/Titles/SectionTitle'
import MenuCard from './MenuCard'
import axios from 'axios'
import MenuLink from './MenuLink'
import Overlay from '../UI/Overlay/Overlay'


function MenuPage() {
    const [dataArray, setDataArray] = useState([])
    const [thaiDataArray, setThaiDataArray] = useState([])
    const [indianDineArray, setIndianDineArray] = useState([])
    const [thaiDineArray, setThaiDineArray] = useState([])

    const [dataExist, setDataExist] = useState(false)
    const [thaiDataExist, setThaiDataExist] = useState(false)

    const [showOverlay, setShowOverlay] = useState(false)
    const [showIndianModal, setShowIndianModal] = useState(false)
    const [showThaiModal, setShowThaiModal] = useState(false)

    // indian takeaway data fetch 
    useEffect(() => {
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/menu_images?menu-images-category-slug=indian-takeaway-menu&_embed`)
            .then(res => {
                setDataArray(res.data)
                setDataExist(true)
            }).catch(err => {
                console.log(err)
            })

        // thai takeaway data fetch 
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/menu_images?menu-images-category-slug=thai-takeaway-menu&_embed`)
            .then(res => {
                setThaiDataArray(res.data)
                setThaiDataExist(true)

            }).catch(err => {
                console.log(err)
            })

        // thai takeaway data fetch 
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/menu_images?menu-images-category-slug=indian-dine-in-menu&_embed`)
            .then(res => {
                setIndianDineArray(res.data)
            }).catch(err => {
                console.log(err)
            })

        // thai takeaway data fetch 
        axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/menu_images?menu-images-category-slug=thai-dine-in-menu&_embed`)
            .then(res => {
                setThaiDineArray(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    // indian takeaway array 
    const indianTakeaway = dataArray.map(data => {
        return {
            takeawayMenu: data.acf.pdf_menu.url,
            takeawayMenuImage: data._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url
        }
    })

    const indianDineIn = indianDineArray.map(data => {
        return {
            dineMenu: data.acf.pdf_menu.url,
        }
    })

    // thai takeaway 
    const thaiTakeaway = thaiDataArray.map(data => {
        return {
            takeawayMenu: data.acf.pdf_menu.url,
            takeawayMenuImage: data._embedded['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url
        }
    })

    const thaiDineIn = thaiDineArray.map(data => {
        return {
            dineMenu: data.acf.pdf_menu.url
        }
    })

    // click handlers 
    const closeClickHandler = () => {
        setShowIndianModal(false)
        setShowOverlay(false)
        setShowThaiModal(false)
    }

    const overlayClickHandler = () => {
        setShowIndianModal(false)
        setShowOverlay(false)
        setShowThaiModal(false)
    }

    const indianCardHandler = () => {
        setShowIndianModal(true)
        setShowOverlay(true)
    }

    const thaiCardHandler = () => {
        setShowThaiModal(true)
        setShowOverlay(true)
    }

    return (
        <Container className="row-container">
            <Overlay showOverlay={showOverlay} overlayClick={overlayClickHandler} />
            <SectionTitle> Select Menu</SectionTitle>
            <Flex>
                {dataExist ?
                    <MenuCard menuCardClick={indianCardHandler} image={indianTakeaway[0].takeawayMenuImage} title="Indian Menu" />
                    : null
                }
                {
                    thaiDataExist ?
                        <MenuCard menuCardClick={thaiCardHandler} image={thaiTakeaway[0].takeawayMenuImage} title="Thai Menu" />
                        : null
                }
            </Flex>

            {dataExist && showIndianModal ?
                <MenuLink
                    closeClick={closeClickHandler}
                    overlayClick={overlayClickHandler}
                    takeAwayTitle="Takeaway Menu"
                    dineInTitle="Dine In Menu"
                    takeawayLink={indianTakeaway[0].takeawayMenu}
                    dineInLink={indianDineIn[0].dineMenu}
                ></MenuLink>
                : null
            }

            {dataExist && showThaiModal ?
                <MenuLink
                    closeClick={closeClickHandler}
                    overlayClick={overlayClickHandler}
                    takeAwayTitle="Takeaway Menu"
                    dineInTitle="Dine In Menu"
                    takeawayLink={thaiTakeaway[0].takeawayMenu}
                    dineInLink={thaiDineIn[0].dineMenu}
                ></MenuLink>
                : null
            }



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
