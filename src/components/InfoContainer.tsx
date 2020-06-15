import React   from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoContainer: React.FC = () => { 
    return(
        <StyledContainer>
                <StyledLink to="/kontakt">Kontakt</StyledLink>
                <StyledLink to="/impressum">Impressum</StyledLink>
                <StyledLinkBlack to="/datenschutz">Datenschutz</StyledLinkBlack>
            </StyledContainer>
    )
}
const StyledContainer = styled.div`
    position:absolute;
    display: flex;
    flex-direction: row;
    bottom: 0;
    left: 50%;
    margin-left: -295px;
    @media (max-width: 667px) {
        left: 0;
        margin-left: 10%;
        width: 100%;
    }
`;
const StyledLink = styled(Link)`
    margin: 40px;
    width: 64px;
    height: 23px;
    left: 500px;
    top: 847px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #FFFFFF;
    @media (max-width: 667px) {
        margin: 5%;
    }
`;

const StyledLinkBlack = styled(StyledLink)`
    color: #000000;
    @media (max-width: 667px) {
        color: #FFFFFF;
    }
`;
export default InfoContainer;