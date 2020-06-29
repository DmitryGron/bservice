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
    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
    };
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);
  
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
            <Header style={{transition: `${goingUp ? 'all .5s ease-in-out' : '' }`, display: `${goingUp ? 'flex' : 'none' }` }}>
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
            <InfoContainerBlack/>
        </MainContainer>
    )
};

const StyledImage = styled(PrivacyImg)`
    margin-left: auto;
    order: 2;
    margin-top: 20vh;
    margin-right: 10vw;
    display: block;
    float: right;
    width: 30vw;
    height: auto;
    @media (max-width: 900px) {
        display: none;
    }
`;
const TextSection = styled.div`
    margin-top: 25vh;
    margin-left: 6vw;
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    color: #000000;
`;
const StyledLogo = styled(Logo)`
    position: inherit
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;
const Header = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    background-color: #f6f6fa;;
    color: #fff;
    height: 18vh;
`;

export default Privacy;
