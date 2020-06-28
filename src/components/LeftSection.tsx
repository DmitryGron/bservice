import React from "react";
import styled from 'styled-components';

const LeftSection: React.FC = ({ children }) => {
    return(
        <StyledSection>{children}</StyledSection>
    )
};

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#A83617;
	width:50%;
	float:left;
	height:100vh;
    box-sizing: border-box;
    margin:0;
    padding:0;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export default LeftSection;