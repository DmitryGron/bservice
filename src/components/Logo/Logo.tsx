import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Logo: React.FC<ComponentProps<any>> = ({ className }) => {
  return (
    <LogoContainer data-qa="CryptoPrepLogo" className={className} />
  );
};

export const LogoContainer = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 168.22px;
  height: 87px;
  background: url(${logo}) no-repeat 50% 50%;
  margin: 40px 60px;

  @media (max-width: 960px) {
    width: 168.22px;
    height: 87px;
    margin: 5px;

  }
`;

export default Logo;
