import styled from 'styled-components';
import background from '../assets/background.png';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;

    background-image:
            linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
            url(${background});

    background-size: 200px;
    background-position: center;
    background-repeat: repeat;
    background-attachment: fixed;

    height: 10vh;
    width: 100%;
`;

const FooterText = styled.p`
  margin: 0 auto;
  font-family: "Noto Sans", sans-serif;
  color: #5a5a5a;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>All Rights Reserved &copy;</FooterText>
        </StyledFooter>
    );
}