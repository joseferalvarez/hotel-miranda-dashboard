import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router';
import { FiLogOut } from "react-icons/fi";

import {
    TopbarContainer,
    TopbarTitle,
    IconContainer,
    Icon
} from "./TopbarStyled";
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/actionsLogin';

const Topbar = () => {
    let location = useLocation();
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogout = () => {
        logout(dispatch);
        navigate("/");
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
                <Icon onClick={doLogout}>
                    <FiLogOut className='icon' />
                </Icon>
            </IconContainer>
        </TopbarContainer>
    );
}

export default Topbar;
