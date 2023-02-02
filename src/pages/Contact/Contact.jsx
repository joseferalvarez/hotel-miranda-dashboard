/**React */
import React, { useEffect, useState } from 'react';
/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../actions/actionsContact';
/**Components */
import ContactList from '../../components/Contacts/ContactList';
import ContactTable from '../../components/Contacts/ContactTable';
/**Styles */
import { SwiperContainer } from '../../Styles/Common/Swiper';
import { ViewContainer } from "../../Styles/Common/ViewContainer";

/**Component */
const Contact = () => {
    /**States */
    const { contacts } = useSelector((state) => state.contactReducer);
    const [filterContacts, setFilterContacts] = useState(null);
    const dispatch = useDispatch();

    /**GET all contacts */
    useEffect(() => {
        if (!contacts.length) {
            getAllContacts(dispatch);
        }
    }, []);

    /**Set contacts state */
    useEffect(() => {
        if (contacts) {
            setFilterContacts(contacts.filter((contact) => contact.archived === 1));
        }
    }, [contacts]);

    /**HTML */
    return (
        <ViewContainer>
            <SwiperContainer>
                <ContactList contacts={filterContacts}></ContactList>
            </SwiperContainer>
            <div className='content'>
                <ContactTable contacts={contacts}></ContactTable>
            </div>
        </ViewContainer>
    );
}

export default Contact;
