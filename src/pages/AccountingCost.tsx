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
import whiteBurger from '../assets/burger-white.svg'
import { ReactComponent as Costs } from '../assets/costs.svg'

const AccountingCost: React.FC = () => {   
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
                    <Title> WAS KOSTETDIE BUCHHALTUNG?</Title>
                    <Text>
                        Unsere Honorare richten sich wie überall nach dem Aufwand und den tatsächlich in Anspruch genommenen Leistungen. 
                        Eine gut vorbereitete Buchhaltung mit vollständigen Belegen spart jedoch Zeit und Kosten.
                        <p/>
                        Gerne schauen wir im Rahmen eines Probemonats, welchen Aufwand die Buchhaltung Ihres Pflegedienstes erfordert. 
                        Danach unterbreiten wir Ihnen ein Angebot über die monatliche Pauschale.
                        <p/>
                        Vereinbaren Sie noch heute einen Termin für eine kostenlose und unverbindliche Erstberatung.
                        <p/>
                        <StyledSpan>WIR SCHAFFEN ORDNUNG!</StyledSpan>
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
const TextSection = styled.div`
    margin: 25.1vh 6vw;
    display: flex;
    flex-direction: column;
    max-width: 25.520833333333332vw;
`;
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 48px;;
    line-height: 52px;
    color: #FFFFFF;
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
`;
const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
const StyledImage = styled(Costs)`
    margin: 29.4vh auto;   
    display: block;
    width: 29.6875vw;
    height: 42.4vh;
    .gear {
        animation: ${rotate} 5s linear infinite;
        transform-box: fill-box;
        transform-origin: center;
    }
`;
const StyledSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
`;
export default AccountingCost;
