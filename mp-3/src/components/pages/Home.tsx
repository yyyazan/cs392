import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/me.png';

const StyledHome = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 60vw;
    align-items: flex-start;
    gap: 2vw;
    margin: 10vh auto;

    @media (max-width: 750px) {
        flex-direction: column;
        margin: 5vh auto;
    }
`;

const ProfileImg = styled.img`
    width: 12vw;
    height: auto;
`;

const AboutText = styled.p`
    color: #5a5a5a;
    font-family: 'Noto Sans', sans-serif;
    font-size: calc(5px + 1.5vw);
    margin: 2vw 5vw;

    a {
        color: maroon;
    }
`;

export default function Home() {
    return (
        <>
            <title>about | Yazan Alzahrany</title>
            <StyledHome>
                <h3 style={{ fontFamily: 'Garamond, serif', color: '#3B9C9C', margin: '0 0 2vh 0' }}>About</h3>
                <Container>
                    <ProfileImg src={profileImg} alt="Yazan" />
                    <AboutText>
                        I'm working on my bachelor's in mathematics &amp; computer science at <Link to="/education">Boston University</Link>, currently based in Riyadh &amp; Boston. I love making <Link to="/projects">projects</Link> that combine tech and <Link to="/art">illustration</Link>.
                        <br />
                        <br />
                        Department of Computer Science,
                        <br />
                        Boston University
                        <br />
                        <br />
                        <a href="mailto:yazan@bu.edu">yazan@bu.edu</a>
                    </AboutText>
                </Container>
            </StyledHome>
        </>
    );
}