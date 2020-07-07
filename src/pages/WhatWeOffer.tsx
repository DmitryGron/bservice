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
            <StyledSpanHide>WIR SIND FÜR SIE DA!</StyledSpanHide>
            <LeftSection>
                <TextSection>
                    <Title>WAS BIETEN WIR?</Title>
                    <Text>
                    <Heading>Finanzbuchhaltung</Heading>
                    <SubText>Abrechnung von Pflegeleistungen</SubText>
                    <SubText>Buchung der laufenden Geschäftsvorfälle</SubText>
                    <SubText>Debitoren -und Kreditorenbuchhaltung</SubText>
                    <SubText>Pflege der offenen Posten</SubText>
                    <SubText>Zahlungsüberwachung</SubText>
                    <SubText>Forderungsmanagement, Mahnwesen</SubText>
                    <SubText>Ausdruck von Zwischenauswertungen, z.B. Kassenbuch, OPListen, Sach- und Personenkonten,
                    Summen- und Saldenlisten, BWA, Rating, Journal u.ä.</SubText>
                    <p />
                    <Heading>Lohnbuchhaltung</Heading>
                    <SubText>laufende monatliche Abrechnung</SubText>
                    <SubText>Jahresendarbeiten</SubText>
                    <SubText>Bescheinigungen</SubText>
                    <p />
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
const Heading = styled.h4`
    @media (max-width: 900px) {
        margin: 1vh auto;
    }
`;
const StyledSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
`;
const TextSection = styled.div`
    display: none;
    margin: 25vh 2vw 2vh 8.056vw;
    flex-direction: column;
    max-width: 80vw;
    @media (max-width: 900px) and (min-width: 600px) {
        display: flex;
    }
    @media (max-width: 600px) {
        display: flex;
        margin: 15.3vh 2vw 2vh 8.056vw;
    }
`;
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.25rem;
    color: #FFFFFF;
    @media (max-height: 900px) {
        font-size: 4.2vh;
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
const StyledSpanHide = styled.span`
    position: absolute;
    bottom: 8.7vh;
    left: 3.125vw;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.625rem;
    @media (max-width: 900px) {
        display: none;
    }
`;
const SubText = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: -8px;
    height: 1px;
    width: 5px;
    background: #FFFFFF;
  }
`;

export default WhatWeOffer;
