import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from '../components/Logo';
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import { InfoContainerBlack } from "../components/InfoContainer";
import Modal from '../components/Modal';
import { ReactComponent as PrivacyImg } from '../assets/privacy.svg'
import PrivacyContent from '../components/PrivacyContent';


const Privacy: React.FC = () => {
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);
    const [goingUp, setGoingUp] = useState(true);
    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
    };
    const prevScrollY = useRef(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }
            if(currentScrollY === 0) {
                setGoingUp(true);
            }

            prevScrollY.current = currentScrollY;

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <MainContainer>
            <Header className={goingUp ? 'fadeIn' : 'fadeOut'}>
                <StyledLogo red={true} />
                <ActionButton src={burger} onClick={handleOpen} />
            </Header>
            <Modal isOpen={open} />
            <Wrapper>
                <TextSection>
                    <Title>DATENSCHUTZ</Title>
                    <PrivacyContent />
                </TextSection>
                <StyledImage />
            </Wrapper>
            <Footer className={goingUp ? 'fadeIn' : 'fadeOut'}>
                <InfoContainerBlack />
            </Footer>
        </MainContainer>
    )
};

const StyledImage = styled(PrivacyImg)`
    margin-top: 28.4vh;
    margin-right: 10vw;
    position: absolute;
    display: flex;
    right: 0;
    width: 31.736vw;
    height: 34.7vh;
    @media (max-width: 900px) {
        display: none;
    }
`;
const TextSection = styled.div`
    margin-top: 27.8vh;
    margin-left: 8.056vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        margin: 20vh 0 0 8.056vw;
    }
    @media (max-height: 900px) {
        margin: 20.3vh 0 0 8.056vw;

    }
`;
const Title = styled.div`
    margin-bottom: 3.5555555555555554vh;
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.25rem;
    color: #000000;
    @media (max-height: 900px) {
        font-size: 4.2vh;
        line-height: 5.7vh;
    }
`;
const StyledLogo = styled(Logo)`
    position: inherit
`;

const Header = styled<any>('div')`
    display: flex;
    position: fixed;
    width: 100%;
    background-color: #f6f6fa;
    color: #fff;
    height: 18vh;
    z-index: 99;

    &.fadeIn {
        transform: translateY(0);
        transition: .4s ease-in-out;
    }
    &.fadeOut {
        transform: translateY(-100%);
        transition: .4s ease-in-out;
    }
`;
const Footer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f6f6fa;
    color: #fff;
    text-align: center;
    height: 10vh;
    
    &.fadeIn {
        transform: translateY(0);
        transition: .4s ease-in-out;
    }
    &.fadeOut {
        transform: translateY(100%);
        transition: .4s ease-in-out;
    }
`;
const Wrapper = styled.div`
    position: inherit;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;
export default Privacy;
