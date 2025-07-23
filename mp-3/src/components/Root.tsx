import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header   from './Header';
import Nav      from './Nav';
import Footer   from './Footer';

import Home      from './pages/Home';
import Education from './pages/Education';
import Projects  from './pages/Projects';
import Art       from './pages/Art';

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root() {
    return (
        <Wrapper>
            <Header title="Yazan Alzahrany" />

            <Container>
                <Nav />
                <Routes>
                    <Route path="/"          element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects"  element={<Projects />} />
                    <Route path="/art"       element={<Art />} />
                </Routes>
            </Container>

            <Footer />
        </Wrapper>
    );
}