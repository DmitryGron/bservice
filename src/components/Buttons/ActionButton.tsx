import React, { ComponentProps }  from "react";
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';

const ActionButton: React.FC<ComponentProps<any>> = ({src, onClick, ...rest}) => { 

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) {
          onClick(event);
        }
      };  
    return(
        <ButtonWrapper>
            <Tooltip title="Menu">
                <IconButton {...rest} onClick={handleButtonClick}><img src={src} alt='burger-btn'/></IconButton>
            </Tooltip>
        </ButtonWrapper>
    )
};

const ButtonWrapper = styled.div`
position: absolute;
display: flex;
right: 0;
`;

export default ActionButton;