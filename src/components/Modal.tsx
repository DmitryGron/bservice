import React, {useEffect, ComponentProps }  from "react";
import styled, { keyframes } from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import MainContainer from "./MainContainer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import close from '../assets/close.svg'
import closeWhite from '../assets/close-white.svg'
import question from '../assets/question.svg'
import Image from "../components/Image";
import {InfoContainer} from "../components/InfoContainer";
import { AppPath } from '../layout/appRoutes';
import Logo from '../components/Logo';

const Modal: React.FC<ComponentProps<any>> = ({isOpen}) => { 
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if(isOpen !== undefined){
            setOpen(true)
        }
    }, [isOpen])

    const handleClose = () => {
        setOpen(false);
      };

    return(
        <Dialog fullScreen onClose={handleClose} open={open}
        PaperProps={{
            style: {
            overflow: 'hidden',
            },
        }}>
            <MainContainer>
                <Logo/>
                <ActionButtonWhite src={closeWhite} onClick={handleClose}/>
                <LeftSection>
                    <TextSection>
                        <Title>BUCHHALTUNG FÜR DIE PFLEGE  </Title>
                        <Text>01. <StyledLink to={AppPath.WHYUS} onClick={handleClose}>WARUM BEI UNS?</StyledLink></Text>
                        <Text>02. <StyledLink to={AppPath.WHATWEOFFER} onClick={handleClose}>WAS BIETEN WIR?</StyledLink></Text>
                        <Text>03. <StyledLink to={AppPath.ACCOUNTINGCOST} onClick={handleClose}>WAS KOSTET DIE BUCHHALTUNG?</StyledLink></Text>
                    </TextSection>                
                </LeftSection>
                <RightSection>
                    <ActionButton src={close} onClick={handleClose}/>
                    <Image src={question} alt='question' component={StyledImage} />
                </RightSection>
            </MainContainer >
            <InfoContainer onClick={handleClose}/>
        </Dialog>
    )
};
const float = keyframes`
    50% {
     transform: translate(0, 20px);
  }
`;
const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const StyledImage = styled.img`
    margin: 25vh auto;   
    display: block;
    width: 30vw;
    height: 47.5vh;
    .float {
        animation: ${rotate} 5s linear infinite;
        transform-box: fill-box;
        transform-origin: center;
        /* animation: ${float} 3s ease-out infinite; */
    }
`;
const TextSection = styled.div`
    margin: 30vh 6vw;
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    margin-bottom: 5vh;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    color: #FFFFFF;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 2vh;
    line-height: 145.5%;
    color: #FFFFFF;
    :hover {
        text-decoration: underline;
    }
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-weight: 900;
    font-size: 2vh;
    line-height: 26px; 
`;
const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;

export default Modal;
