import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router';
import { FiLogOut } from "react-icons/fi";

import {
    TopbarContainer,
    TopbarTitle,
    IconContainer,
    Icon
} from "./TopbarStyled";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/actionsLogin';
import { getAllContacts } from '../../actions/actionsContact';

const Topbar = () => {
    let location = useLocation();
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { contacts } = useSelector((state) => state.contactReducer)
    const [messages, setMessages] = useState(0);

    const doLogout = () => {
        logout(dispatch);
        navigate("/");
    }

    useEffect(() => {
        getAllContacts(dispatch);
    }, []);

    useEffect(() => {
        setMessages(contacts.reduce((count, contact) => contact.archived ? count + 1 : count + 0, 0));
    }, [contacts]);

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

    const navigateContacts = () => {
        navigate("/contact");
    };

    return (
        <TopbarContainer>
            <TopbarTitle>
                <p>{title}</p>
            </TopbarTitle>

            <IconContainer>
                <Icon onClick={navigateContacts}>
                    <AiOutlineMail className='icon' />
                    {messages ?
                        <div className='notification'>
                            <p>{messages}</p>
                        </div> :
                        <></>}
                </Icon>
                <Icon onClick={doLogout}>
                    <FiLogOut className='icon' />
                </Icon>
            </IconContainer>
        </TopbarContainer>
    );
}

export default Topbar;
