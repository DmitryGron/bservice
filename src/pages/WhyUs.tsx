import React from 'react';
import styled, { keyframes } from "styled-components";
import Logo from '../components/Logo';
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import {InfoContainer} from "../components/InfoContainer";
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
            <Logo/>
            <ActionButtonWhite src={whiteBurger} onClick={handleOpen}/>
            <LeftSection>
                <TextSection>
                    <Title>WARUM BEI UNS?</Title>
                    <Text>
                    Unser Unternehmen verbindet langjährige Erfahrung auf dem Gebiet der Buchhaltung 
                    mit den besonderen Anforderungen eines Pflegedienstes.
                    <p/>
                    <b>BUCHHALTUNG SERVICE</b> ging aus unserem Ambulanten Pflegedienst WARMES HERZ hervor.
                    Wir kennen uns daher mit den Besonderheiten der Pflege bestens aus.
                    <p/>
                    <b>BUCHHALTUNG SERVICE</b> garantiert Ihnen eine zuverlässige Buchhaltung, damit 
                    Sie für dietäglichen Herausforderungen der Pflege denRücken frei haben. 
                    <p/>
                    <b>AUS DER PFLEGE, FÜR DIE PFLEGE!</b>
                    </Text>
                </TextSection> 
            </LeftSection>
            <RightSection>
                <ActionButton src={burger} onClick={handleOpen}/>
                <Modal isOpen={open} />
                <StyledImage/>
            </RightSection>
            <InfoContainer/>
        </MainContainer>
    )
};

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const rotateLeft = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
`;

const TextSection = styled.div`
    margin: 30vh 6vw;
    display: flex;
    flex-direction: column;
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
    font-size: 2vh; 
`;
const StyledImage = styled(People)`
    margin: 26vh auto;   
    display: block;
    width: 35vw;
    height: auto;
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
