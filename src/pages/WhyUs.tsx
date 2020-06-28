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
import Image from "../components/Image";
import people from '../assets/people.svg'
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
                    <Title>WAS KOSTET DIE BUCHHALTUNG?</Title>
                    <Text>
                    Unsere Honorare richten sich wie überall nach dem Aufwand und den tatsächlich in Anspruch genommenen Leistungen. Eine gut vorbereitete Buchhaltung mit vollständigen Belegen spart jedoch Zeit und Kosten.
                    Gerne schauen wir im Rahmen eines Probemonats, welchen Aufwand die Buchhaltung Ihres Pflegedienstes erfordert. Danach unterbreiten wir Ihnen ein Angebot über die monatliche Pauschale.
                    <p/>
                    Vereinbaren Sie noch heute einen Termin für eine kostenlose und unverbindliche Erstberatung.
                    <p/>
                    <b>WIR SCHAFFEN ORDNUNG!</b>
                    </Text>
                </TextSection> 
            </LeftSection>
            <RightSection>
                <ActionButton src={burger} onClick={handleOpen}/>
                <Modal isOpen={open} />
                <Image src={people} alt='people' component={StyledImage} />
            </RightSection>
            <InfoContainer/>
        </MainContainer>
    )
};

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
    font-size: 18px; 
`;
const StyledImage = styled.img`
    margin: 26vh auto;   
    display: block;
    width: 28vw;
    height: 47.5vh;
`;
const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
export default WhyUs;
