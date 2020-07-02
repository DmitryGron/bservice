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
                    info@buchhaltung-service.berlin
                    <p/>
                    Telefon: <b>0152 / 178 40 168</b>
                    <br/>
                    Telefax: <b>030 / 290 48 188</b>
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

const StyledImage = styled(Contact)`
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
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2vh;
    color: #000000;
`;
const Wrapper = styled.div`
    display: flex
`;
export default Contacts;
