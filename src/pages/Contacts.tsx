import React from 'react';
import Logo from '../components/Logo';
import styled from "styled-components";
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import {InfoContainerBlack} from "../components/InfoContainer";
import Modal from '../components/Modal';
import { ReactComponent as Contact } from '../assets/contacts.svg'

const Contacts: React.FC = () => {   
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
      };

    return (
        <MainContainer>
            <Logo red={true}/>
            <ActionButton src={burger} onClick={handleOpen}/>
            <Wrapper>
            <TextSection>
                    <Title>KONTAKT</Title>
                    <Text>
                    <a href="mailto:info@buchhaltung-service.berlin" style={{textDecoration: 'none', color: 'black'}}>info@buchhaltung-service.berlin</a><br/>
                    <p/>
                    Telefon: <StyledSpan><a href="tel:+015217840168" style={{textDecoration: 'none', color: 'black'}}>0152</a> / <a href="tel:17840168" style={{textDecoration: 'none', color: 'black'}}>178 40 168</a></StyledSpan><br/>
                    Telefax: <StyledSpan><a href="tel:+030290 48 188" style={{textDecoration: 'none', color: 'black'}}>030</a> / <a href="tel:29048188" style={{textDecoration: 'none', color: 'black'}}>290 48 188</a></StyledSpan>
                    <p/>
                    Buchhaltung Service Berlin <br/>
                    Alessia Kostenko <br/>
                    Bürgerheimstr. 4 <br/>
                    10365 Berlin <br/>
                    </Text>
                </TextSection>
            <StyledImage/>
            </Wrapper>
            <Modal isOpen={open} />
            <InfoContainerBlack/>
        </MainContainer>
    )
};
const StyledSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
`;
const StyledImage = styled(Contact)`
    margin-left: auto;
    order: 2;
    margin-top: 19.8vh;
    margin-right:  7.552083333333333vw;
    display: block;
    float: right;
    width: 25.677083333333332vw;
    height: 53.4vh;
    @media (max-width: 900px) {
        display: none;
    }
`;
const TextSection = styled.div`
    margin-top: 30.4vh;
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
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #000000;
    line-height: 3vh;

`;
const Wrapper = styled.div`
    display: flex
`;
export default Contacts;
