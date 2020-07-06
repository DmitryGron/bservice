import React from 'react';
import styled from "styled-components";
import Logo from '../components/Logo';
import ActionButton from '../components/Buttons/ActionButton'
import MainContainer from "../components/MainContainer";
import burger from '../assets/burger.svg'
import { InfoContainerBlack } from "../components/InfoContainer";
import Modal from '../components/Modal';
import { ReactComponent as Impression } from '../assets/impression.svg'

const Impressions: React.FC = () => {
    const [open, setOpen] = React.useState<boolean | undefined>(undefined);

    const handleOpen = () => {
        open === undefined ? setOpen(true) : setOpen(!open);
    };

    return (
        <MainContainer>
            <Logo red={true} />
            <ActionButton src={burger} onClick={handleOpen} />
            <Modal isOpen={open} />
            <Wrapper>
                <TextSection>
                    <Title>IMPRESSUM</Title>
                    <Text>
                        <b>Angaben gemäß § 5 TMG</b>
                        <p />
                    Buchhaltung Service Berlin<br />
                    Alessia Kostenko<br />
                    (Einzelunternehmerin)<br />
                    Bürgerheimstr. 4<br />
                    10365 Berlin
                    <p />
                    Telefon: <StyledSpan><a href="tel:+015217840168" style={{ textDecoration: 'none', color: 'black' }}>0152</a> / <a href="tel:17840168" style={{ textDecoration: 'none', color: 'black' }}>178 40 168</a></StyledSpan><br />
                    Telefax: <StyledSpan><a href="tel:+030290 48 188" style={{ textDecoration: 'none', color: 'black' }}>030</a> / <a href="tel:29048188" style={{ textDecoration: 'none', color: 'black' }}>290 48 188</a></StyledSpan>
                        <p />
                        <StyledSpan>E-Mail</StyledSpan>: <a href="mailto:info@buchhaltung-service.berlin" style={{ textDecoration: 'none', color: 'black' }}>info@buchhaltung-service.berlin</a><br />
                        <StyledSpan>Web</StyledSpan>: <a href="https://www.buchhaltung-service.berlin" style={{ textDecoration: 'none', color: 'black' }}>www.buchhaltung-service.berlin</a>
                        <p />
                        <StyledSpan>Angaben zur Tätigkeit:</StyledSpan> <br />
                    Die Serviceleistungen in Steuersachen umfasst im <br />
                    Rahmen des § 6 Nr. 3 u. 4 StBerG das Kontieren<br />
                    und Buchen der lfd. Geschäftsvorfälle, die laufende<br />
                    Lohnabrechnung und die Lohnsteuer- Anmeldung.
                    <p />
                        <StyledSpan>Bild- und Grafikquellen:</StyledSpan><br />
                    © Designed by Freepik<br />
                    © Designed by Colourbox
                    </Text>
                </TextSection>
                <StyledImage />
                <RightText>
                    <StyledSpan>Designer Team:</StyledSpan>
                    <p />
                    <a href="mailto:a.k.buchhaltungsservice@gmail.com" style={{ textDecoration: 'none', color: 'black' }}>ALESSIA KOSTENKO</a><br />
            Idee, Konzept, Recherchen, Bilder
            <p />
            ALINA KREZ<br />
            Graphic designer & illustrator:  Logo, Firmenstil
            <p />
            KATRIN ARABADZHI<br />
            Designer/ UI/UX /Web&Mobile:  Grafik- und Bildbearbeitung,  Seitengestaltung
            <p />
                    <a href="https://linkedin.com/in/dmitryskumin" style={{ textDecoration: 'none', color: 'black' }}>DMYTRO SKUMIN</a> <br />
            Technische Umsetzung
            </RightText>
            </Wrapper>
            <InfoContainerBlack />
        </MainContainer>
    )
};
const StyledSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
`;
const StyledImage = styled(Impression)`
    display: block;
    margin-left: auto;
    margin-top: 36vh;
    margin-right: -25vw;
    order: 2;
    float: right;
    width: 62.806vw;
    height: 38.7vh;
    @media (max-width: 900px) {
        display: none;
    }
`;
const TextSection = styled.div`
    margin-top: 27.8vh;
    margin-left: 8.056vw;
    display: flex;
    flex-direction: column;
    max-width: 25.069vw;
    @media (max-width: 1500px) and (min-width: 600px) {
        max-width: 75vw;
    }
    @media (max-width: 600px) {
        margin-top: 15vh;
        max-width: 75vw;
    }
`;
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.25rem;
    color: #000000;
    @media (max-height: 900px) {
        font-size: 5.2vh;
        line-height: 5.7vh;
    }
`;
const Text = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    color: #000000;
    line-height: 1.625rem;
    @media (max-height: 900px) {
        font-size: 1.5vh;
        line-height: 2.2vh;
    }
`;
const RightText = styled.div`
    margin-top: 25vh;
    color: #000000;
    font-size: 1.5vh;
    margin-right: 3vw;
    order: 3;
    float: right;
    max-width: 12vw;
    @media (max-height: 900px) {
        font-size: 1.3vh;
        line-height: 1.8vh;
    }
    @media (max-width: 1160px) {
        display: none;
    }
`;
const Wrapper = styled.div`
    display: flex
`;
export default Impressions;
