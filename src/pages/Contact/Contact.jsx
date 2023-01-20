import React, { useEffect, useState } from 'react';
import { ContactContainer } from './ContactStyled';
import ContactList from '../../components/Contacts/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../actions/actionsContact';
import ContactTable from '../../components/Contacts/ContactTable';

const Contact = () => {

    const dispatch = useDispatch();
    const { contacts } = useSelector((state) => state.contactReducer);
    const [filterContacts, setFilterContacts] = useState(null);

    useEffect(() => {
        getAllContacts(dispatch);
    }, []);

    useEffect(() => {
        if (contacts) {
            setFilterContacts(contacts.filter((contact) => contact.archived === 1));
        }
    }, [contacts]);

    return (
        <ContactContainer>
            <ContactList contacts={filterContacts}></ContactList>
            <div className='content'>
                <ContactTable contacts={contacts}></ContactTable>
            </div>
        </ContactContainer>
    );
}

export default Contact;
