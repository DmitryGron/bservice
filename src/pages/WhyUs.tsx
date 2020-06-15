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

const WhyUs: React.FC = () => {   
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
      };

    return (
        <MainContainer>
            <Logo/>
            <LeftSection>
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

const StyledImage = styled.img`
    margin: 26vh auto;   
    display: block;
    width: 28vw;
    height: 47.5vh;
`;
export default WhyUs;
