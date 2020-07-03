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
    margin: 5vh auto;
    font-style: normal;
    font-weight: 600;
    font-size: 3vh;
    line-height: 3.5vh;
    text-transform: uppercase;
    color: #FFFFFF;
`;
const StyledImage = styled.img`
    margin: 25vh auto 0;    
    display: block;
    width: 262.2px;
    height: 372.04px;
    @media (max-height: 720px){
        height: 297px;
    }
`;
const StyledImage2 = styled(StyledImage)`
    margin: 8vh auto 0;    
    width: 401.43px;
    height: 650.18px;
    @media (max-height: 720px){
        height: 520px;
    }
`;

const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
export default Home;
