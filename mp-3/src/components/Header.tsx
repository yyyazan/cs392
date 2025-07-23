import styled from 'styled-components';
import { Link } from 'react-router-dom';
import owl from '../assets/owl.png';

const StyledHeader = styled.header`
    /* …styles… */
`;

/* --- prop type --- */
interface HeaderProps {
    title: string;
    to?: string;
}

export default function Header({ title, to = '/' }: HeaderProps) {
    return (
        <StyledHeader>
            <img id="owl" src={owl} alt="Logo" />
            <Link to={to}>
                <h1>{title}</h1>
            </Link>
        </StyledHeader>
    );
}