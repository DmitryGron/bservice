import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Logo: React.FC<ComponentProps<any>> = ({ className }) => {
  return (
    <LogoContainer className={className} />
  );
};

export const LogoContainer = styled.span`
  position: absolute;
  display: inline-block;
  vertical-align: top;
  width: 168.22px;
  height: 87px;
  background: url(${logo}) no-repeat 50% 50%;
  margin: 40px 60px;
  z-index: 999999;
  @media (max-height: 720px){
    margin: 32px 48px;
  }
`;

export default Logo;
