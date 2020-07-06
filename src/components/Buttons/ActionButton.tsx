import React, { ComponentProps }  from "react";
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

const ActionButton: React.FC<ComponentProps<any>> = ({src, anotherSrc, onClick, ...rest}) => { 

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) {
          onClick(event);
        }
      };
    return(
        <ButtonWrapper>
                <IconButton {...rest} onClick={handleButtonClick}><StyledImg src={src} alt='burger-btn'/></IconButton>
        </ButtonWrapper>
    )
};

const ButtonWrapper = styled.div`
margin: 7.7vh 4.167vw;
position: absolute;
display: flex;
right: 0;
`;

const StyledImg = styled.img`
  height: 1.6vh;
  width: 2.083vw;
  @media (max-width: 1400px) {
      width: 30px;
      height: 15px;
    }
`;

export default ActionButton;