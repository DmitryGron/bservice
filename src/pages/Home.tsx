import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import scores from '../assets/scores.svg'
import scores2 from '../assets/scores2.svg'
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import Modal from '../components/Modal';
import Image from "../components/Image";
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import whiteBurger from '../assets/burger-white.svg'

import {InfoContainer} from "../components/InfoContainer";

const Home: React.FC = () => {   
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
      };

    return (
        <MainContainer>
            <Logo/>
            <ActionButtonWhite src={whiteBurger} onClick={handleOpen}/>
            <LeftSection>
                <Image component={StyledImage} src={scores} alt="Scores image"/>
                <Title>Ordnung ist der Schlüssel zum Erfolg</Title>
            </LeftSection>
            <RightSection>
                <ActionButton src={burger} onClick={handleOpen}/>
                <Modal isOpen={open} />
                <Image component={StyledImage2} src={scores2} alt="Scores2 image"/>
            </RightSection>
            <InfoContainer/>
        </MainContainer>
    )
};

const Title = styled.div`
    margin: 6.7vh auto;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.625rem;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width: 600px){
        width: 90.65625vw;
        margin: 2vh 5vw;
    }
`;
const StyledImage = styled.img`
    margin: 29.4vh auto 0;    
    display: block;
    width: 18.208vw;
    height: 41.3vh;
    @media (max-width: 900px) and (min-width: 600px) {
        width: 32.65625vw;
    }
    @media (max-width: 600px) {
        margin: 15vh auto 0; 
        width: 32.65625vw;
    }
`;
const StyledImage2 = styled(StyledImage)`
    margin: 12.2vh auto 0;    
    width: 27.877vw;
    height:72.2vh;
`;

const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
export default Home;
