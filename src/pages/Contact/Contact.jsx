import React, { useEffect } from 'react';
import { ContactContainer } from './ContactStyled';
import ContactList from '../../components/Contacts/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../actions/actionsContact';

const Contact = () => {

    const dispatch = useDispatch();
    const { contacts } = useSelector((state) => state.contactReducer);

    useEffect(() => {
        getAllContacts(dispatch);
    }, []);

    return (
        <ContactContainer>
            <ContactList contacts={contacts}></ContactList>
        </ContactContainer>
    );
}

export default Contact;
