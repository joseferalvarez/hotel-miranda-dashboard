import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import WordMark from "../wordMark";
import LoguedUser from '../LoguedUser';

import {
    NavContainer,
    Logo,
    LogoIcon,
    LogoLetter,
    Navigation,
    Link
} from "./NavegationStyled"

import { BiKey } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaUserFriends, FaArrowsAltH } from "react-icons/fa";
import { AiFillHome, AiFillContacts, AiFillHeart } from "react-icons/ai";



const Navegation = () => {

    let user = {
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Sashenka Gouthier",
        email: "sgouthier0@aboutads.info",
    }

    const [display, setDisplay] = useState(0);

    const displayMenu = () => {
        setDisplay(!display)
    }

    return (
        <NavContainer display={display ? "500px" : "0px"}>
            <button className='arrow-button' onClick={displayMenu}><FaArrowsAltH className='arrow' /></button>
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
    )
}

export default Navegation;
