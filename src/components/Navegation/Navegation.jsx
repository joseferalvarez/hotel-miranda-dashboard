import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LoguedUser from './LoguedUser';
import Logo from '../Logo/Logo';

import {
    NavContainer,
    LogoContainer,
    Navigation,
    ArrowButton,
    UserCard,
    NavigationDescription,
    NavigationRights,
    NavigationAuthor,
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
    const location = useLocation();

    const displayMenu = () => {
        setDisplay(!display)
    }

    return (
        <NavContainer display={display ? "500px" : "0px"}>
            <ArrowButton onClick={displayMenu}><FaArrowsAltH className='arrow' /></ArrowButton>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Navigation>
                <ul>
                    <NavLink to="/">
                        <Link route="/" current={location.pathname}>
                            <div /><AiFillHome className='icon' /><p>Dashboard</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/bookings">
                        <Link route="/bookings" current={location.pathname}>
                            <div /><BsCalendarCheck className='icon' /><p>Bookings</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/rooms">
                        <Link route="/rooms" current={location.pathname}>
                            <div /><BiKey className='icon' /><p>Rooms</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/contact">
                        <Link route="/contact" current={location.pathname}>
                            <div /><AiFillContacts className='icon' /><p>Contact</p>
                        </Link>
                    </NavLink>
                    <NavLink to="/users">
                        <Link route="/users" current={location.pathname}>
                            <div /><FaUserFriends className='icon' /><p>Users</p>
                        </Link>
                    </NavLink>
                </ul>
            </Navigation>

            <UserCard>
                <LoguedUser user={user}></LoguedUser>
            </UserCard>

            <NavigationDescription>Hotel Miranda Admin Dashboard</NavigationDescription>
            <NavigationRights>@2022 All Rights Reserved</NavigationRights>
            <NavigationAuthor>Making With <span><AiFillHeart /></span> by Jose Fernando Álvarez</NavigationAuthor>
        </NavContainer>
    )
}

export default Navegation;
