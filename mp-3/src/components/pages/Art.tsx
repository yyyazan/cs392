import styled from 'styled-components';

import tracksImg from '../../assets/tracks.jpeg';
import skyImg from '../../assets/sky.jpg';
import mikuImg from '../../assets/m.jpg';
import flowerImg from '../../assets/flower.jpg';

const StyledArt = styled.main`
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

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100vw;
  flex-wrap: wrap;
`;

const ArtImg = styled.img`
  width: 15vw;
  margin: 1vw;

  @media (max-width: 750px) {
    width: 20vw;
  }
`;

export default function Art() {
    return (
        <>
            <title>art | Yazan Alzahrany</title>
            <StyledArt>
                <SectionTitle>illustration</SectionTitle>
                <p style={{ fontFamily: 'Noto Sans, sans-serif', color: '#5a5a5a', marginTop: '2vh' }}>
                    Recent work
                </p>
                <Gallery>
                    <ArtImg src={tracksImg} alt="Railroad tracks" />
                    <ArtImg src={skyImg} alt="Sky" />
                    <ArtImg src={mikuImg} alt="Hatsune Miku" />
                    <ArtImg src={flowerImg} alt="Flowers" />
                </Gallery>
            </StyledArt>
        </>
    );
}