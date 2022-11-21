import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import { useLocation } from 'react-router';
import { FiLogOut } from "react-icons/fi";

import {
    TopbarContainer,
    TopbarTitle,
    IconContainer,
    Icon
} from "./TopbarStyled";
import LoginContext from '../../context/contextLogin';
import { logout } from '../../context/actions';

const Topbar = () => {

    const [, setLog] = useContext(LoginContext);
    let location = useLocation();
    const [title, setTitle] = useState("");

    const goLogin = () => {
        setLog(logout({ auth: false, name: "" }));
    }


    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setTitle("Dashboard");
                break;
            case "/bookings":
                setTitle("Bookings");
                break;
            case "/rooms":
                setTitle("Rooms");
                break;
            case "/contact":
                setTitle("Contact");
                break;
            case "/users":
                setTitle("Users");
                break;
            default:
                setTitle("");
        }
    }, [location]);

    return (
        <TopbarContainer>
            <TopbarTitle>
                <p>{title}</p>
            </TopbarTitle>

            <IconContainer>
                <Icon>
                    <AiOutlineMail className='icon' />
                    <div className='notification'>
                        <p>5</p>
                    </div>
                </Icon>
                <Icon>
                    <AiOutlineBell className='icon' />
                    <div className='notification'>
                        <p>8</p>
                    </div>
                </Icon>
                <Icon onClick={goLogin}>
                    <FiLogOut className='icon' />
                </Icon>
            </IconContainer>
        </TopbarContainer>
    );
}

export default Topbar;
