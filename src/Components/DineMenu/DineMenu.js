import React, { useState } from 'react'
import styled from 'styled-components'
import SectionTitle from '../UI/Titles/SectionTitle'
import Mains from './MenuCategories/Mains/Mains'
import Accompaniments from './MenuCategories/Accompaniments'
import Desserts from './MenuCategories/Desserts'
import Rice from './MenuCategories/Rice'
import Starter from './MenuCategories/Starter'
import TandooriBreads from './MenuCategories/TandooriBreads'
import Button from '../UI/Button/Button'
import KidsCombo from './MenuCategories/KidsCombo'
import Banquet from './MenuCategories/Banquet'

function DineMenu() {
    const [showMains, setShowMains] = useState(false)
    const [showStarter, setShowStarter] = useState(true)
    const [showDesserts, setShowDesserts] = useState(false)
    const [showAccomp, setShowAccomp] = useState(false)
    const [showBanquets, setShowBanquets] = useState(false)
    const [showKidsCombo, setShowKidsCombo] = useState(false)
    const [showRice, setShowRice] = useState(false)
    const [showTandooriBread, setShowTandooriBread] = useState(false)

    const mainsClickHandler = event => {
        setShowMains(true)
        setShowStarter(false)
        setShowDesserts(false)
        setShowAccomp(false)
        setShowBanquets(false)
        setShowKidsCombo(false)
        setShowRice(false)
        setShowTandooriBread(false)
    }
    const starterClickHandler = event => {
        setShowMains(false)
        setShowStarter(true)
        setShowDesserts(false)
        setShowAccomp(false)
        setShowBanquets(false)
        setShowKidsCombo(false)
        setShowRice(false)
        setShowTandooriBread(false)
    }
    const breadClickHandler = event => {
        setShowMains(false)
        setShowStarter(false)
        setShowDesserts(false)
        setShowAccomp(false)
        setShowBanquets(false)
        setShowKidsCombo(false)
        setShowRice(false)
        setShowTandooriBread(true)

    }
    const riceClickHandler = event => {
        setShowMains(false)
        setShowStarter(false)
        setShowDesserts(false)
        setShowAccomp(false)
        setShowBanquets(false)
        setShowKidsCombo(false)
        setShowRice(true)
        setShowTandooriBread(false)
    }
    const accompClickHandler = event => {
        setShowMains(false)
        setShowStarter(false)
        setShowDesserts(false)
        setShowAccomp(true)
        setShowBanquets(false)
        setShowKidsCombo(false)
        setShowRice(false)
        setShowTandooriBread(false)
    }
    const dessertsClickHandler = event => {
        setShowMains(false)
        setShowStarter(false)
        setShowDesserts(true)
        setShowAccomp(false)
        setShowBanquets(false)
        setShowKidsCombo(false)
        setShowRice(false)
        setShowTandooriBread(false)
    }
    const banquetsClickHandler = event => {
        setShowMains(false)
        setShowStarter(false)
        setShowDesserts(false)
        setShowAccomp(false)
        setShowBanquets(true)
        setShowKidsCombo(false)
        setShowRice(false)
        setShowTandooriBread(false)
    }
    const kidsComboClickHandler = event => {
        setShowMains(false)
        setShowStarter(false)
        setShowDesserts(false)
        setShowAccomp(false)
        setShowBanquets(false)
        setShowKidsCombo(true)
        setShowRice(false)
        setShowTandooriBread(false)
    }
    return (
        <Container>

            <SectionTitle subTitle="Tasty">Dine In Menu</SectionTitle>
            <ButtonContainer className="row-container">

                <Button active={showStarter} margin={true} buttonClick={starterClickHandler}>Starter</Button>
                <Button active={showMains} margin={true} buttonClick={mainsClickHandler}>Mains</Button>
                <Button active={showTandooriBread} margin={true} buttonClick={breadClickHandler}>Tandoori Breads</Button>
                <Button active={showRice} margin={true} buttonClick={riceClickHandler}>Rice</Button>
                <Button active={showBanquets} margin={true} buttonClick={banquetsClickHandler}>Special Banquets</Button>
                <Button active={showKidsCombo} margin={true} buttonClick={kidsComboClickHandler}>Kids Combo</Button>
                <Button active={showAccomp} margin={true} buttonClick={accompClickHandler}>Accompaniments</Button>
                <Button active={showDesserts} margin={true} buttonClick={dessertsClickHandler}>Desserts</Button>


            </ButtonContainer>

            <MenuBox >

                <MenuContainer>

                    <Starter showCategory={showStarter}></Starter>
                    <Mains showCategory={showMains} />
                    <Rice showCategory={showRice} />
                    <TandooriBreads showCategory={showTandooriBread} />
                    <Accompaniments showCategory={showAccomp} />
                    <Banquet showCategory={showBanquets} />
                    <KidsCombo showCategory={showKidsCombo} />
                    <Desserts showCategory={showDesserts} />
                </MenuContainer>
            </MenuBox>

        </Container>
    )
}
const Container = styled.section`
background: var(--darkBlue);
margin-bottom: -10px;
padding: 50px 0;
`
const MenuBox = styled.div`
padding: 0 20px;
`
const ButtonContainer = styled.div`
padding: 30px 0;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
`
const MenuContainer = styled.div``

export default DineMenu
