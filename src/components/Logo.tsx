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
  width: 8.761458333333334vwpx;
  height: 8.7vh;
  margin: 4vh 3.125vw;
`;
const StyledImage = styled.img`
  position: absolute;
  width: 8.761458333333334vwpx;
  height: 8.7vh;
`;

export default Logo;
