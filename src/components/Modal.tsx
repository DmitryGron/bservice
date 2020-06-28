import React, {useEffect, ComponentProps }  from "react";
import styled from 'styled-components';
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
        <Dialog fullScreen onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
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

const StyledImage = styled.img`
    margin: 26vh auto;   
    display: block;
    width: 28vw;
    height: 47.5vh;
`;
const TextSection = styled.div`
    margin: 35vh 6vw;
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
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 145.5%;
    color: #FFFFFF;
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-weight: 900;
    font-size: 18px;
    line-height: 26px; 
`;
const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;
export default Modal;
