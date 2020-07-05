import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import redLogo from '../assets/logoRed.svg';

const Logo: React.FC<ComponentProps<any>> = ({ red, className }) => {
  return (
    <LogoContainer href="/" className={className} style={{background: `url(${red? redLogo : logo}) no-repeat 50% 50%`}} />
  );
};

export const LogoContainer = styled.a`
  position: absolute;
  display: inline-block;
  vertical-align: top;
  width: 168.22px;
  height: 87px;
  margin: 40px 60px;
  z-index: 2;
  background-size: 69px 175px;
  @media (max-height: 720px){
    margin: 32px 48px;
  }
`;

export default Logo;
