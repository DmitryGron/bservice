import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import {InfoContainer} from "../components/InfoContainer";
import Modal from '../components/Modal';
import whiteBurger from '../assets/burger-white.svg'
import Image from "../components/Image";
import whatWeOffer from '../assets/what-we-offer.svg'
import whatWeOfferWhite from '../assets/what-we-offer-white.svg'

const WhatWeOffer: React.FC = () => {   
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
      };

    return (
        <MainContainer>
            <Logo/>
            <ActionButtonWhite src={whiteBurger} onClick={handleOpen}/>
        <StyledContainer>
        <Image component={StyledImage} src={whatWeOffer} alt="what-we-offer-image"/>
        </StyledContainer>
        <StyledSpan>WIR SIND FÜR SIE DA!</StyledSpan>
            <LeftSection>
            <TextSection>
                    <Title>WAS GENAU BIETEN WIR AN?</Title>
                    <Text>
                    <h2>Abrechnung von Pflegeleistungen</h2>
                    - Buchung der laufenden Geschäftsvorfälle<br/>
                    - Debitoren- und Kreditorenbuchhaltung<br/>
                    - Pflege der offenen Posten<br/>
                    - Zahlungsüberwachung<br/>
                    - Forderungsmanagement, Mahnwesen<br/>
                    - Ausdruck von Zwischenauswertungen, z.B. Kassenbuch, OPListen, Sach- und Personenkonten,<br/>
                    Summen- und Saldenlisten, BWA, Rating, Journal u.ä.
                    <p/>
                    <h2>Lohnbuchhaltung</h2>
                    - laufende monatliche Abrechnung<br/>
                    - Jahresendarbeiten<br/>
                    - Bescheinigungen<br/>
                    <StyledSpan>WIR SIND FÜR SIE DA!</StyledSpan>
                    </Text>
                </TextSection> 
            </LeftSection>
            <RightSection>
                <ActionButton src={burger} onClick={handleOpen}/>
                <Modal isOpen={open} />
            </RightSection>
            <InfoContainer/>
        </MainContainer>
    )
};

const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
const StyledSpan = styled.span`
    position: absolute;
    bottom: 8.7vh;
    left: 3.125vw;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
`;
const TextSection = styled.div`
    display: none;
    margin: 25vh 6vw;
    flex-direction: column;
    max-width: 75.520833vw;
    @media (max-width: 900px) and (min-width: 600px) {
        display: flex;
    }
    @media (max-width: 600px) {
        display: flex;
        margin: 15.3vh 6vw;
    }
`;
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    color: #FFFFFF;
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px; 
    line-height: 2.5vh;
`;
const StyledContainer = styled.div`
    margin: 0 12.5vw;
    position:absolute;
    display: flex;
    flex-direction: row;
`;
const StyledImage = styled.img`
    margin: 21vh 3.125vw;
    width: 68.802083vw;
    height: 60vh;
    display: block;
    @media (max-width: 900px) {
        display: none;
    }
`;

export default WhatWeOffer;
