/**React */
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/actionsLogin';
import { getAllContacts } from '../../actions/actionsContact';
/**Styles */
import {
    TopbarContainer,
    TopbarTitle,
    IconContainer,
    Icon
} from "../../Styles/Navegation/Topbar";
import { AiOutlineMail } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

/**Component */
const Topbar = () => {

    /**States */
    const { contacts } = useSelector((state) => state.contactReducer)
    const [title, setTitle] = useState("");
    const [messages, setMessages] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();

    /**Logout*/
    const doLogout = () => {
        logout(dispatch);
        navigate("/");
    }

    /**GET all the contacts */
    useEffect(() => {
        if (!contacts) {
            getAllContacts(dispatch);
        }
    }, []);

    /**Count the unarchived contacts */
    useEffect(() => {
        setMessages(contacts.reduce((count, contact) => contact.archived ? count + 1 : count + 0, 0));
    }, [contacts]);

    /**Get the name of the route */
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

    /**Navigate to contacts view */
    const navigateContacts = () => {
        navigate("/contact");
    };

    /**HTML */
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
