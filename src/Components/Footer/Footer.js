import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import axios from 'axios'
import ColumnTitle from '../UI/Titles/ColumnTitle'
import AnchorLinkIcon from '../UI/AnchorLinkIcon/AnchorLinkIcon'
import Copyright from '../UI/Copyright/Copyright'

const Footer = (props) => {
  const [dataArray, setDataArray] = useState([])
  useEffect(() => {
    axios(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/info`)
      .then(res => {
        setDataArray(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  const infoArray = dataArray.map(item => {
    return {
      streetAddress: item.acf.street_address,
      region: item.acf.region,
      phone: item.acf.phone,
      email: item.acf.email,
      facebook: item.acf.facebook,
      tripAdvisor: item.acf.trip_advisor,
      menuLog: item.acf.menu_log,
      openingHours: item.acf.opening_hours,
      closed: item.acf.closed_,
      copyright: item.acf.copyright

    }
  })

  return (
    <React.Fragment>
      {
        infoArray[0] ?
          <Container>
            <Content className="row-container">

              <ContactBox>
                < ColumnTitle color="var(--green)">
                  Contact Us
                </ColumnTitle >
                <Items>
                  <AnchorLinkIcon
                    link={`tel: ${infoArray[0].streetAddress}`}
                    icon={"faMapMarkerAlt"}
                  >
                    {infoArray[0].streetAddress} <SecondText >{infoArray[0].region}</SecondText>
                  </AnchorLinkIcon>

                  <AnchorLinkIcon
                    link={`tel: ${infoArray[0].phone}`}
                    icon={"faPhoneAlt"}
                  >
                    {infoArray[0].phone}
                  </AnchorLinkIcon>

                  <AnchorLinkIcon
                    link={`mailto: ${infoArray[0].email}`}
                    icon={"faEnvelope"}
                  >
                    {infoArray[0].email}
                  </AnchorLinkIcon>
                </Items>


              </ContactBox>

              <LogoContainer>
                <Logo width="250px" mobileWidth="220px" />
                <SocialContainer>
                  <AnchorLinkIcon target="_blank" icon="faFacebook" link={infoArray[0].facebook} size="35px"> </AnchorLinkIcon>
                  <AnchorLinkIcon target="_blank" icon="faTripadvisor" link={infoArray[0].tripAdvisor} size="35px"> </AnchorLinkIcon>

                </SocialContainer>
              </LogoContainer>

              <OpeningHoursContainer>
                <ColumnTitle color="var(--green)">
                  Opening Hours
                </ColumnTitle >
                <Items>
                  <AnchorLinkIcon icon="faClock" >
                    Tuesday–Sunday
                    <SecondText >{infoArray[0].openingHours}</SecondText>
                    <SecondText >{infoArray[0].closed} Closed</SecondText>
                  </AnchorLinkIcon>
                </Items>
              </OpeningHoursContainer>
            </Content>
            <Copyright copyright={infoArray[0].copyright} />
          </Container > : null
      }

    </React.Fragment>

  )
}

const Container = styled.section`
background: var(--lightGreen); 
padding: 50px 0 0 0;
`

const SecondText = styled.span`
margin-left: 23px;
display: block;
`
const Content = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
flex-wrap: wrap;
@media(max-width: 630px){ 
  flex-direction: column;
justify-content: space-between;
align-items:center;
flex-wrap: wrap;
}
`
const ContactBox = styled.div`

`
const LogoContainer = styled.div`
margin: 15px 0;
@media(max-width: 630px){ 
  margin: 20px 0 -20px  0;

}
`
const OpeningHoursContainer = styled.div`

`
const Items = styled.div`
margin-top: 10px;
`

const SocialContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 110px;
margin: 10px auto;
`

export default Footer
