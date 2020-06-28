import React from "react";
import styled from 'styled-components';

const RightSection: React.FC = ({ children }) => {
    return(
        <StyledSection>{children}</StyledSection>
    )
};

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#FAFAFA;
	width:50%;
	float:left;
	height:100vh;
	margin:0;
	padding:0;
    box-sizing: border-box;    
    @media (max-width: 900px) {
        display: none;
    }
`;

export default RightSection;