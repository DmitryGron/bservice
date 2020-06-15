import React, {useEffect, ComponentProps }  from "react";
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import MainContainer from "./MainContainer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ActionButton from '../components/Buttons/ActionButton'
import close from '../assets/close.svg'
import question from '../assets/question.svg'
import Image from "../components/Image";
import InfoContainer from "../components/InfoContainer";

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
                <LeftSection>
                    <TextSection>
                        <Title>BUCHHALTUNG FÜR DIE PFLEGE  </Title>
                        <Text>01. <StyledLink to="/kontakt">WARUM BEI UNS?</StyledLink></Text>
                        <Text>02. <StyledLink to="/kontakt">WAS BIETEN WIR?</StyledLink></Text>
                        <Text>03. <StyledLink to="/kontakt">WAS KOSTET DIE BUCHHALTUNG?</StyledLink></Text>
                    </TextSection>                
                </LeftSection>
                <RightSection>
                    <ActionButton src={close} onClick={handleClose}/>
                    <Image src={question} alt='question' component={StyledImage} />
                </RightSection>
            </MainContainer>
            <InfoContainer/>
        </Dialog>
    )
};

const StyledImage = styled.img`
    margin: 15vh auto;   
    display: block;
    padding-top: 40px;
    width: 456px;
    height: 428px;
    @media (max-height: 720px){
        height: 342px;
    }
`;
const TextSection = styled.div`
    padding-left: 4vh;
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    margin-right: 5vh;
    margin-top: 35vh;
    margin-bottom: 5vh;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 52px;
    color: #FFFFFF;
    @media (max-height: 720px){
        font-size: 40px;
    }
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
export default Modal;
