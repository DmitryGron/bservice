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
                <IconButton {...rest} onClick={handleButtonClick}><img src={src} alt='burger-btn'/></IconButton>
        </ButtonWrapper>
    )
};

const ButtonWrapper = styled.div`
margin: 4vh 3vh;
position: absolute;
display: flex;
right: 0;
`;

export default ActionButton;