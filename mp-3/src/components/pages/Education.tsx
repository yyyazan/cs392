import styled from 'styled-components';
import { Link } from 'react-router-dom';
import buImg from '../../assets/bu.png';
import yaleImg from '../../assets/yale.png';

const StyledEducation = styled.main`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const SchoolImg = styled.img`
  width: 12vw;
  height: auto;
`;

const Text = styled.p`
  color: #5a5a5a;
  font-family: 'Noto Sans', sans-serif;
  font-size: calc(5px + 1.5vw);
  margin: 2vw 5vw;

  a {
    color: maroon;
    text-decoration: none;
  }
`;

export default function Education() {
    return (
        <>
            <title>education | Yazan Alzahrany</title>

            <StyledEducation>
                <h3 style={{ fontFamily: 'Garamond, serif', color: '#3B9C9C', margin: '2vh 0' }}>
                    Education
                </h3>

                <Container>
                    <SchoolImg src={buImg} alt="Boston University" />
                    <Text>
                        I’m pursuing a bachelor's in mathematics &amp; computer science at
                        <span style={{ color: 'maroon' }}> Boston University</span>, and I also plan to minor in{' '}
                        <Link to="/art">visual arts</Link>.
                    </Text>
                </Container>

                <Container>
                    <SchoolImg src={yaleImg} alt="Yale" />
                    <Text>
                        <a href="https://globalscholars.yale.edu/" target="_blank" rel="noopener noreferrer">
                            Yale Young Global Scholars
                        </a>{' '}
                        (July 2022)
                    </Text>
                </Container>
            </StyledEducation>
        </>
    );
}