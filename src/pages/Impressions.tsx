import React from 'react';
import styled from "styled-components";
import Logo from '../components/Logo';
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import {InfoContainerBlack} from "../components/InfoContainer";
import Modal from '../components/Modal';
import { ReactComponent as Impression } from '../assets/impression.svg'

const Impressions: React.FC = () => {   
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
      };

    return (
        <MainContainer>
            <Logo red={true}/>
                <ActionButton src={burger} onClick={handleOpen}/>
                <Modal isOpen={open} />
                <Wrapper>
            <TextSection>
                    <Title>IMPRESSUM</Title>
                    <Text>
                    <b>Angaben gemäß § 5 TMG</b>
                    <p/>
                    Buchhaltung Service Berlin<br/>
                    Alessia Kostenko<br/>
                    (Einzelunternehmerin)<br/>
                    Bürgerheimstr. 4<br/>
                    10365 Berlin
                    <p/>
                    Telefon: <b><a href="tel:+015217840168" style={{textDecoration: 'none', color: 'black'}}>0152</a> / <a href="tel:17840168" style={{textDecoration: 'none', color: 'black'}}>178 40 168</a></b><br/>
                    Telefax: <b><a href="tel:+030290 48 188" style={{textDecoration: 'none', color: 'black'}}>030</a> / <a href="tel:29048188" style={{textDecoration: 'none', color: 'black'}}>290 48 188</a></b>
                    <p/>
                    <b>E-Мail</b>: <a href="mailto:info@buchhaltung-service.berlin" style={{textDecoration: 'none', color: 'black'}}>info@buchhaltung-service.berlin</a><br/>
                    <b>Web</b>: <a href="https://www.buchhaltung-service.berlin" style={{textDecoration: 'none', color: 'black'}}>www.buchhaltung-service.berlin</a>
                    <p/>
                    <b>Angaben zur Tätigkeit:</b> <br/>
                    Die Serviceleistungen in Steuersachen umfasst im <br/> 
                    Rahmen des § 6 Nr. 3 u. 4 StBerG das Kontieren<br/>
                    und Buchen der lfd. Geschäftsvorfälle, die laufende<br/> 
                    Lohnabrechnung und die Lohnsteuer- Anmeldung.
                    <p/>
                    <b>Bild- und Grafikquellen:</b><br/>
                    © Designed by Freepik<br/>
                    © Designed by Colourbox
                    </Text>
                </TextSection>
            <StyledImage/>
            <RightText>
            <b>Designer Team:</b>
            <p/>
            <a href="mailto:a.k.buchhaltungsservice@gmail.com"  style={{textDecoration: 'none', color: 'black'}}>ALESSIA KOSTENKO</a><br/>
            Idee, Konzept, Recherchen, Bilder 
            <p/>
            ALINA KREZ<br/>
            Graphic designer & illustrator:  Logo, Firmenstil 
            <p/>
            KATRIN ARABADZHI<br/>
            Designer/ UI/UX /Web&Mobile:  Grafik- und Bildbearbeitung,  Seitengestaltung
            <p/>
            <a href="https://linkedin.com/in/dmitryskumin"  style={{textDecoration: 'none', color: 'black'}}>DMYTRO SKUMIN</a> <br/>
            Technische Umsetzung 
            </RightText>
            </Wrapper>
            <InfoContainerBlack/>
        </MainContainer>
    )
};

const StyledImage = styled(Impression)`
    display: block;
    margin-left: auto;
    margin-top: 30vh;
    margin-right: -25vw;
    order: 2;
    float: right;
    width: 60vw;
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
    max-width: 20vw;

    @media (max-width: 900px) {
        max-width: 75vw;
    }
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
    font-size: 1.7vh;
    color: #000000;
`;
const RightText = styled.div`
    margin-top: 25vh;
    color: #000000;
    font-size: 1.5vh;
    margin-right: 3vw;
    order: 3;
    float: right;
    max-width: 12vw;
    @media (max-width: 900px) {
        display: none;
    }
`;
const Wrapper = styled.div`
    display: flex
`;
export default Impressions;
