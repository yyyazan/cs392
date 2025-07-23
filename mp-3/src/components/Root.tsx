import styled from 'styled-components';
import { Routes, Route } from 'react-router';

// layout components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

// page components
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Art from './pages/Art';
// import Experience from './pages/Experience';
// import Skills from './pages/Skills';


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
            <Header logoSrc="/attachments/owl.png" title="Yazan Alzahrany" />

            <Container>
                <Nav />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/art" element={<Art />} />
                    {/*<Route path="/experience" element={<Experience />} />*/}
                    {/*<Route path="/skills" element={<Skills />} />*/}
                </Routes>
            </Container>

            <Footer />
        </Wrapper>
    );
}
