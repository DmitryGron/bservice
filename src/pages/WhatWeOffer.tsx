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
        <Image component={ImageWhite} src={whatWeOfferWhite} alt="what-we-offer-image"/>
        </StyledContainer>
        <StyledSpan>WIR SIND FÜR SIE DA!</StyledSpan>
            <LeftSection>
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

const ImageWhite = styled.img`
    margin-top: 21vh;
    width: 80vw;
    display: none;
    @media (max-width: 900px) {
        margin-top: 30vh;
        display: block;
    }
`;
export default WhatWeOffer;
