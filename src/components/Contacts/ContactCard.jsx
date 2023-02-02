/**React */
import React, { useState } from 'react';
/**Redux */
import { useDispatch } from 'react-redux';
import { updateOneContact } from '../../actions/actionsContact';
/**Styles */
import {
    Contact,
    Comment,
    User,
    Data,
    Buttons
} from "../../Styles/Contacts/ContactCard";
import {
    RxCrossCircled,
    RxCheckCircled
} from "react-icons/rx";

/**Component */
const ContactCard = ({ contact }) => {
    /**States */
    const dispatch = useDispatch();
    const [doBigger, setDoBigger] = useState(false);

    /**Archive contact */
    const setArchived = () => {
        updateOneContact(dispatch, contact._id, { ...contact, archived: 0 });
    };

    /**Format date from database */
    const formatDate = (date) => {
        const month = (1000 * 60 * 60 * 24 * 30);
        const days = (1000 * 60 * 60 * 24);
        const hours = (1000 * 60 * 60);
        const minutes = (1000 * 60);

        const actualDate = new Date(Date.now()).getTime();
        const messageDate = new Date(date).getTime();
        const formatDate = actualDate - messageDate;

        if (Math.floor(formatDate / month) > 0) {
            return `${Math.floor(formatDate / month)} months ago`;
        } else if (Math.floor(formatDate / days) > 0) {
            return `${Math.floor(formatDate / days)} days ago`;
        } else if (Math.floor(formatDate / hours) > 0) {
            return `${Math.floor(formatDate / hours)} hours ago`;
        } else {
            return `${Math.floor(formatDate / minutes)} minutes ago`;
        }
    }

    /**HTML */
    return (
        <Contact>
            <Comment big={doBigger}>{contact.comment}</Comment>
            {doBigger ? <button className='button' onClick={() => setDoBigger(!doBigger)}><RxCheckCircled /></button> : <></>}
            <User>
                <Data>
                    <p>{contact.customer}</p>
                    <p>{formatDate(contact.date)}</p>
                </Data>
                <Buttons>
                    <button onClick={() => setDoBigger(!doBigger)}><RxCheckCircled /></button>
                    <button onClick={setArchived}><RxCrossCircled /></button>
                </Buttons>
            </User>
        </Contact>
    );
}

export default ContactCard;
