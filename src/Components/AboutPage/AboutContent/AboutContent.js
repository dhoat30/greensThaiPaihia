import React from 'react'
import SectionTitle from '../../UI/Titles/SectionTitle'
import styled from 'styled-components'
import Hero from '../../UI/Hero/Hero'
import MediumFonts from '../../UI/Titles/MediumFonts'
import ImageCard from '../../UI/ImageCard/ImageCard'
import WallpaperPattern from '../../UI/Pattern/WallpaperPattern'
import BuddhaPattern from '../../UI/Pattern/buddhaPattern'
import RowTitle from '../../UI/Titles/RowTitle'
import CardsContent from './CardsContent'
import TeamMembers from './TeamMembers'

function AboutContent(props) {

    return (
        <Container>
            <Slogan >
                <BuddhaPattern />
                <RowTitle color="var(--darkGrey)">{props.dataArray[0].introductionContent}</RowTitle>
            </Slogan>
            <CardsContent dataArray={props.dataArray} />
            <TeamMembers dataArray={props.dataArray} />
        </Container>
    )
}

const Container = styled.div`

`
const Slogan = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
`

export default AboutContent
