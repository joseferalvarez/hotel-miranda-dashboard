import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiKey } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiFillHome, AiFillContacts, AiFillHeart } from "react-icons/ai";
import styled from 'styled-components';
import WordMark from "./wordMark";
import LoguedUser from './LoguedUser';

const NavContainer = styled.div`
    width: ${props => props.width || "0px"};
    box-shadow: 13px 3px 40px #00000005;
    background-color: #FFFFFF;
    transition: width 0.3s;
    overflow: hidden;

    .user-card{
        margin-left: 15%;
    }


    .description,
    .rights,
    .author{
        padding-left: 15%;
    }

    .description{
        font-family: var(--font-poppins);
        font-weight: 600;
        color: #212121;
    }

    .rights,
    .author{
        color: #799283;
        font-size: 14px;
    }

    .author{
        margin-top: 30px;
    }
`;

const Logo = styled.div`
    width: 70%;
    padding: 5% 15%;
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

const Navigation = styled.nav`
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        a{
            text-decoration: none;
        }
    }
`;

const Link = styled.li`
    width: 70%;
    display: flex;
    height: 70px;
    border-left: 8px solid white;
    align-items: center;
    gap: 20px;
    padding-left: 15%;
    transition: all 0.3s;

    &:hover{
        border-left: 8px solid #E23428;
        p,
        .icon{
            color: #E23428;
        }
    }

    p {
        color: #799283;
        font-family: var(--font-poppins);
        font-size: 18px;
        text-decoration: none;
    }

    .icon{
        color: #799283;
        width: 20px;
        height: 20px;
    }
`;

const Navegation = ({ width }) => {

    let user = {
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Sashenka Gouthier",
        email: "sgouthier0@aboutads.info",
    }

    const [display, setDisplay] = useState(true);
    const [widthNav, setWidthNav] = useState(width);

    const resize = () => {
        if (display) {
            setWidthNav("3%");
            setDisplay(false);
        } else {
            setWidthNav("25%");
            setDisplay(true);
        }
    }

    return (
        <NavContainer width={widthNav}>
            <button onClick={resize}>resize</button>
            <Logo>
                <LogoIcon>
                    <LogoLetter>H</LogoLetter>
                </LogoIcon>
                <WordMark></WordMark>
            </Logo>
            <Navigation>
                <ul>
                    <NavLink to="/">
                        <Link>
                            <AiFillHome className='icon' /><p>Dashboard</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/bookings">
                        <Link>
                            <BsCalendarCheck className='icon' /><p>Bookings</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/rooms">
                        <Link>
                            <BiKey className='icon' /><p>Rooms</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/contact">
                        <Link>
                            <AiFillContacts className='icon' /><p>Contact</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/users">
                        <Link>
                            <FaUserFriends className='icon' /><p>Users</p>
                        </Link>
                    </NavLink>
                </ul>
            </Navigation>

            <div className='user-card'>
                <LoguedUser user={user}></LoguedUser>
            </div>

            <p className='description'>Hotel Miranda Admin Dashboard</p>
            <p className='rights'>@2022 All Rights Reserved</p>
            <p className='author'>Making With <span><AiFillHeart /></span> by Jose Fernando Álvarez</p>
        </NavContainer>
    );
}

export default Navegation;
