import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import redLogo from '../assets/logoRed.svg';
import Image from "../components/Image";


const Logo: React.FC<ComponentProps<any>> = ({ red, className }) => {
  return (
    <StyledLink href="/"  className={className}><Image component={StyledImage} src={ red ? redLogo : logo} alt="Scores image"/></StyledLink>
  );
};

const StyledLink = styled.a`
  position: absolute;
  width: 11.682vw;
  height: 9.6vh;
  min-width: 130px;
  min-height: 65px;
  margin: 4.4vh 4.167vw;
`;
const StyledImage = styled.img`
  position: absolute;
  width: 11.682vw;
  height: 9.6vh;
  min-width: 130px;
  min-height: 65px;
`;

export default Logo;
