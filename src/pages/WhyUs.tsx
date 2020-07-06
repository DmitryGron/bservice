import React from 'react';
import styled, { keyframes } from "styled-components";
import Logo from '../components/Logo';
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import { InfoContainer } from "../components/InfoContainer";
import Modal from '../components/Modal';
import { ReactComponent as People } from '../assets/people.svg'
import whiteBurger from '../assets/burger-white.svg'

const WhyUs: React.FC = () => {
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
    };

    return (
        <MainContainer>
            <Logo />
            <ActionButtonWhite src={whiteBurger} onClick={handleOpen} />
            <LeftSection>
                <TextSection>
                    <Title>WARUM BEI UNS?</Title>
                    <Text>
                        Unser Unternehmen verbindet langjährige Erfahrung auf dem Gebiet der Buchhaltung
                        mit den besonderen Anforderungen eines Pflegedienstes.
                    <p />
                        <b>BUCHHALTUNG SERVICE</b> ging aus unserem Ambulanten Pflegedienst WARMES HERZ hervor.
                    Wir kennen uns daher mit den Besonderheiten der Pflege bestens aus.
                    <p />
                        <b>BUCHHALTUNG SERVICE</b> garantiert Ihnen eine zuverlässige Buchhaltung, damit
                    Sie für dietäglichen Herausforderungen der Pflege denRücken frei haben.
                    <p />
                        <StyledSpan>AUS DER PFLEGE, FÜR DIE PFLEGE!</StyledSpan>
                    </Text>
                </TextSection>
            </LeftSection>
            <RightSection>
                <ActionButton src={burger} onClick={handleOpen} />
                <Modal isOpen={open} />
                <StyledImage />
            </RightSection>
            <InfoContainer />
        </MainContainer>
    )
};

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;
const StyledSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
`;
const rotateLeft = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
`;
const TextSection = styled.div`
    margin: 27.8vh 8.056vw;
    display: flex;
    flex-direction: column;
    max-width: 34vw;
    @media (max-width: 1300px) and (min-width: 900px) {
        max-width: 75.520833vw;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        max-width: 75.520833vw;
    }
    @media (max-width: 600px) {
        max-width: 75.520833vw;
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
const StyledImage = styled(People)`
    margin: 31.6vh 9.861vw;   
    display: block;
    width: 31.875vw;
    height: 42.5vh;
    .gear {
        animation: ${rotate} 5s linear infinite;
        transform-box: fill-box;
        transform-origin: center;
    }

    .gear1 {
        animation: ${rotateLeft} 5s linear infinite;
        transform-box: fill-box;
        transform-origin: center;
    }
`;
const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
export default WhyUs;
