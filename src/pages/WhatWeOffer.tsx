import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import { InfoContainer } from "../components/InfoContainer";
import Modal from '../components/Modal';
import whiteBurger from '../assets/burger-white.svg'
import Image from "../components/Image";
import whatWeOffer from '../assets/what-we-offer.svg'

const WhatWeOffer: React.FC = () => {
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
    };

    return (
        <MainContainer>
            <Logo />
            <ActionButtonWhite src={whiteBurger} onClick={handleOpen} />
                <Image component={StyledImage} src={whatWeOffer} alt="what-we-offer-image" />
            <StyledSpan>WIR SIND FÜR SIE DA!</StyledSpan>
            <LeftSection>
                <TextSection>
                    <Title>WAS GENAU BIETEN WIR AN?</Title>
                    <Text>
                        <Heading>Abrechnung von Pflegeleistungen</Heading>
                    - Buchung der laufenden Geschäftsvorfälle<br />
                    - Debitoren- und Kreditorenbuchhaltung<br />
                    - Pflege der offenen Posten<br />
                    - Zahlungsüberwachung<br />
                    - Forderungsmanagement, Mahnwesen<br />
                    - Ausdruck von Zwischenauswertungen, z.B. Kassenbuch, OPListen, Sach- und Personenkonten,<br />
                    Summen- und Saldenlisten, BWA, Rating, Journal u.ä.
                    <p />
                        <Heading>Lohnbuchhaltung</Heading>
                    - laufende monatliche Abrechnung<br />
                    - Jahresendarbeiten<br />
                    - Bescheinigungen<br />
                        <StyledSpan>WIR SIND FÜR SIE DA!</StyledSpan>
                    </Text>
                </TextSection>
            </LeftSection>
            <RightSection>
                <ActionButton src={burger} onClick={handleOpen} />
                <Modal isOpen={open} />
            </RightSection>
            <InfoContainer />
        </MainContainer>
    )
};

const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
const Heading = styled.h2`
    @media (max-width: 900px) {
        margin: 1vh auto;
    }
`;
const StyledSpan = styled.span`
    position: absolute;
    bottom: 8.7vh;
    left: 3.125vw;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.625rem;
`;
const TextSection = styled.div`
    display: none;
    margin: 25vh 8.056vw;
    flex-direction: column;
    max-width: 80vw;
    @media (max-width: 900px) and (min-width: 600px) {
        margin: 15.3vh 4vw;
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
    font-size: 3rem;
    line-height: 3.25rem;
    color: #FFFFFF;
    @media (max-height: 900px) {
        font-size: 5.2vh;
        line-height: 5.7vh;
    }
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem; 
    line-height: 1.625rem;
    @media (max-height: 900px) {
        font-size: 2vh;
        line-height: 2.8vh;
    }
`;
const StyledImage = styled.img`
    position:absolute;
    margin: 23vh 4.125vw 0;
    width: 91.736vw;
    height: 66.6vh;
    display: block;
    @media (max-width: 900px) {
        display: none;
    }
`;

export default WhatWeOffer;
