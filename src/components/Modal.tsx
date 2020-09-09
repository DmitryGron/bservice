import React, {useEffect, ComponentProps }  from "react";
import styled from "styled-components";
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
                        <Text><StyledSpan>01. </StyledSpan><StyledLink to={AppPath.WHYUS} onClick={handleClose}>WARUM BEI UNS?</StyledLink></Text>
                        <Text><StyledSpan>02. </StyledSpan> <StyledLink to={AppPath.WHATWEOFFER} onClick={handleClose}>WAS BIETEN WIR?</StyledLink></Text>
                        <Text><StyledSpan>03. </StyledSpan> <StyledLink to={AppPath.ACCOUNTINGCOST} onClick={handleClose}>WAS KOSTET DIE BUCHHALTUNG?</StyledLink></Text>
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
const StyledSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.625rem;
`;
const StyledImage = styled.img`
    margin: 26.2vh 10vw;   
    display: block;
    width: 31.667vw;
    height: 47.5vh;
`;
const TextSection = styled.div`
    margin: 31.3vh 8.056vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        margin: 25.3vh 6vw;
    }
`;
const Title = styled.div`
    margin-bottom: 2vh;
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.25rem;
    color: #FFFFFF;
    max-width: 30vw;
    @media (max-width: 1200px) {
        max-width: 75vw;
    }
    @media (max-height: 900px) {
        font-size: 4.2vh;
        line-height: 5.7vh;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.625rem;
    color: #FFFFFF;
    :hover {
        text-decoration: underline;
    }
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-weight: 900;
    font-size: 1.125rem;
    line-height: 1.625rem; 
    @media (max-height: 900px) {
        font-size: 1.5vh;
        line-height: 2.2vh;
    }
`;
const ActionButtonWhite = styled(ActionButton)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
    }
`;

export default Modal;
