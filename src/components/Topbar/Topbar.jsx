import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import { useLocation } from 'react-router';

import {
    TopbarContainer,
    Icon
} from "./TopbarStyled";

const Topbar = () => {

    let location = useLocation();
    const [title, setTitle] = useState("");

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
            <div className='data'>
                <p className='title'>{title}</p>
            </div>

            <div className='icons'>
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
            </div>
        </TopbarContainer>
    );
}

export default Topbar;
