import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo/Logo';

const Home: React.FC = () => {   
    return (
        <Container>
            <LeftSection>
            <Logo/>
            </LeftSection>
            <RightSection></RightSection>
        </Container>
    )};

const Container = styled.div`
    color:#fff;
    font-size:100pt;
`;

const LeftSection = styled.div`
    background-color:#A83617;
	width:50%;
	float:left;
	height:100vh;
    box-sizing: border-box;
    margin:0;
    padding:0;

    @media (max-width: 960px) {
        width: 100%;
    }
`;
const RightSection = styled.div`
    background-color:#FAFAFA;
	width:50%;
	float:left;
	height:100vh;
	margin:0;
	padding:0;
    box-sizing: border-box;    
`;

export default Home;
