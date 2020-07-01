import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Logo from '../components/Logo';
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import {InfoContainerBlack} from "../components/InfoContainer";
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
        console.log('currentScrollY', currentScrollY)
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
  
        prevScrollY.current = currentScrollY;
        console.log(goingUp, currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () =>  window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <MainContainer>
            <Header style={{display: `${goingUp ? 'flex' : 'none' }` }}>
                <StyledLogo red={true}/>
                <ActionButton src={burger} onClick={handleOpen}/>
            </Header> 
                <Modal isOpen={open} />
            <Wrapper>
                <TextSection>
                    <Title>DATENSCHUTZ</Title>
                    <PrivacyContent/>
                </TextSection>
                <StyledImage/>
            </Wrapper>
            <Footer style={{display: `${goingUp ? 'flex' : 'none' }` }}>
                <InfoContainerBlack/>
            </Footer>
        </MainContainer>
    )
};

const StyledImage = styled(PrivacyImg)`
    margin-top: 17vh;
    margin-right: 12vw;
    position: absolute;
    display: flex;
    right: 0;
    width: 30vw;
    height: auto;
    @media (max-width: 900px) {
        display: none;
    }
    @media (max-width: 1300px) {
        margin-right: 12vw;
        margin-top: 30vh;
    }
    @media (max-width: 1100px) {
        margin-right: 10vw;
        margin-top: 40vh;
    }
`;
const TextSection = styled.div`
    margin-top: 25vh;
    margin-left: 6vw;
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    margin-bottom: 5vh;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    color: #000000;
`;
const StyledLogo = styled(Logo)`
    position: inherit
`;
const Header = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    background-color: #f6f6fa;;
    color: #fff;
    height: 18vh;
    z-index: 99;
`;
const Footer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f6f6fa;;
    color: #fff;
    text-align: center;
    height: 10vh;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;
export default Privacy;
