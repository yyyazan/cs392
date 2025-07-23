import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../assets/background.png';

const StyledNav = styled.nav`
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url(${background});
    background-size: 200px;
    background-position: center;
    background-repeat: repeat;
    background-attachment: fixed;

    height: 100vh;
    width: 15vw;

    @media (max-width: 750px) {
        height: 75px;
        width: 100vw;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 750px) {
        flex-direction: row;
    }
`;

const StyledItem = styled.li`
    margin: 4vw;

    @media (max-width: 750px) {
        margin: 20px;
    }
`;

const StyledLink = styled(Link)`
    color: #5a5a5a;
    text-decoration: none;
    font-size: calc(5px + 1.8vw);

    &:hover {
        color: #e85f5f;
        text-decoration: none;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledItem>
                    <StyledLink to="/home">about</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/education">education</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/projects">projects</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/art">art</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/experience">experience</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/skills">skills</StyledLink>
                </StyledItem>
            </StyledList>
        </StyledNav>
    );
}