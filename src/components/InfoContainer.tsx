import React, { ComponentProps } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppPath } from '../layout/appRoutes';

export const InfoContainer: React.FC<ComponentProps<any>> = ({ onClick }) => {
    const handleButtonClick = (event: React.MouseEvent<any, any>) => {
        if (onClick) {
            onClick(event);
        }
    };
    return (
        <StyledContainer>
            <StyledLink
                to={AppPath.CONTACTS}
                onClick={handleButtonClick}
            >Kontakt</StyledLink>
            <StyledLink
                to={AppPath.IMPRESSIONS}
                onClick={handleButtonClick}
            >Impressum</StyledLink>
            <DatenschutzLink
                to={AppPath.PRIVACY}
                onClick={handleButtonClick}
            >Datenschutz</DatenschutzLink>
        </StyledContainer>
    )
}

export const InfoContainerBlack: React.FC = () => {

    return (
        <StyledContainer>
            <StyledLink
                style={{ color: `${window.location.href.indexOf('kontakt') > -1 ? '#A83617' : '#000000'}` }}
                to={AppPath.CONTACTS}
            >Kontakt</StyledLink>
            <StyledLink
                style={{ color: `${window.location.href.indexOf('impressum') > -1  ? '#A83617' : '#000000'}` }}
                to={AppPath.IMPRESSIONS}>Impressum</StyledLink>
            <StyledLink
                style={{ color: `${window.location.href.indexOf('datenschutz') > -1  ? '#A83617' : '#000000'}` }}
                to={AppPath.PRIVACY}>Datenschutz</StyledLink>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    position: fixed;
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
    margin: 3vh 40px;
    width: 64px;
    height: 23px;
    left: 500px;
    top: 847px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.4375rem;
    color: #FFFFFF;
    text-decoration: none;
    @media (max-width: 667px) {
        margin: 5%;
    }
`;

const DatenschutzLink = styled(StyledLink)`
    color: #000000;
    @media (max-width: 900px) {
        color: #FFFFFF;
    }
`;
