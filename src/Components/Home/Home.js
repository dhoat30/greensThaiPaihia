import React from 'react'
import FormSection from './FormSection/FormSection'
import HeroSection from './HeroSection/HeroSection'
import MenuSection from './MenuSection/MenuSection'
import SecondBanner from './SecondBanner/SecondBanner'
import HomeGallery from './HomeGallery/HomeGallery'
import FAQSection from './FAQSection/FAQSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import SloganSection from './SloganSection/SloganSection'
import USP from './USP/USP'
import ChefSection from './ChefSection/ChefSection'
import ExtraInfo from './ExtraInfo/ExtraInfo'
function Home() {
    return (
        <div>
            <HeroSection />
            <SloganSection />
            <MenuSection />
            <USP />
            <SecondBanner />
            <TestimonialSection />
            <ChefSection />
            <ExtraInfo />
            <FormSection />
            <HomeGallery />
            <FAQSection />

        </div>
    )
}


export default Home
