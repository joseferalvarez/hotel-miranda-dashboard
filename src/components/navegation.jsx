import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import WordMark from "./wordMark";

const NavContainer = styled.div`
    width: 20%;
    box-shadow: 13px 3px 40px #00000005;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const LogoIcon = styled.div`
    width: 80px;
    height: 80px;
    box-shadow: 0px 14px 24px 0px rgba(139, 139, 139, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoLetter = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    font-family: var(--font-poppins);
`;

const Navigation = styled.nav``;

const Navegation = () => {
    return (
        <NavContainer>
            <Logo>
                <LogoIcon>
                    <LogoLetter>H</LogoLetter>
                </LogoIcon>
                <WordMark></WordMark>
            </Logo>

            <Navigation>
                <ul>
                    <li>
                        <NavLink to="/">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Bookings</NavLink>
                    </li>
                </ul>
            </Navigation>
        </NavContainer>
    );
}

export default Navegation;
