import React from "react";
import styled from 'styled-components';

const MainContainer: React.FC = ({ children }) => {
    return(
        <Container>{children}</Container>
    )
};

const Container = styled.div`
    color:#fff;
    font-size:100pt;
    margin: 0; 
    height: 100%; 
    overflow: hidden
`;

export default MainContainer;