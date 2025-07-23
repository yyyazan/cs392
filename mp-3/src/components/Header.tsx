import styled from 'styled-components';
import { Link } from 'react-router-dom';
import owl from '../assets/owl.png';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  /* Owl image styling */
  #owl {
    width: 5vw;
    min-width: 70px;
    height: auto;
    margin: 1vw 2vw;
  }

  /* Heading styles */
  h1 {
    color: #3B9C9C;
    font-family: Garamond, serif;
    font-weight: bold;
      font-size: calc(18px + 2vw);
      margin: 0;
  }

  /* Link styles */
  a {
    color: #3B9C9C;
    text-decoration: none;
    &:hover {
      color: #E85F5F;
      text-decoration: none;
    }
  }
`;

// Header component

export default function Header({ title, to = '/' }) {
    return (
        <StyledHeader>
            <img id="owl" src={owl} alt="Logo" />
            <Link to={to}>
                <h1>{title}</h1>
            </Link>
        </StyledHeader>
    );
}