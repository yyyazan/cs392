import styled from 'styled-components';

import gameVideo from '../../assets/game.mp4';
import catGif from '../../assets/cat.gif';

const StyledProjects = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-family: Garamond, serif;
  color: #3B9C9C;
  margin-top: 8vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 60vw;
  align-items: flex-start;
  gap: 2vw;
  margin: 4vh auto;

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 2vh auto;
  }
`;

const Video = styled.video`
  width: 30vw;
  height: auto;
`;

const Text = styled.p`
  color: #5a5a5a;
  font-family: 'Noto Sans', sans-serif;
  font-size: calc(5px + 1.5vw);
  margin: 2vw 5vw;

  a {
    color: #3B9C9C;
    text-decoration: none;
    &:hover {
      color: #E85F5F;
    }
  }
`;

const CatImg = styled.img`
  width: 25vw;
  height: auto;
  margin: 4vh 0;
`;

export default function Projects() {
    return (
        <>
            <title>projects | Yazan Alzahrany</title>
            <StyledProjects>
                <SectionTitle>online piano</SectionTitle>
                <Container>
                    <Text>
                        a little interactive{' '}
                        <a href="https://lilli.garden/piano-lesson.html" target="_blank" rel="noopener noreferrer">
                            piano
                        </a>{' '}
                        I made in HTML/CSS/JS.
                    </Text>
                </Container>

                <SectionTitle>platformer</SectionTitle>
                <Container>
                    <Video src={gameVideo} autoPlay loop muted />
                    <Text>
                        a little video game demo I made with{' '}
                        <a href="https://godotengine.org" target="_blank" rel="noopener noreferrer">
                            Godot
                        </a>
                        !
                    </Text>
                </Container>

                <SectionTitle>calculator</SectionTitle>
                <Container>
                    <Text>
                        A boring calculator demo (future React component). Check it out in the codebase!
                    </Text>
                </Container>

                <Text style={{ textAlign: 'center', marginTop: '6vh' }}>no more projects :(</Text>
                <CatImg src={catGif} alt="Sad cat" />
            </StyledProjects>
        </>
    );
}