import React, { useState, useEffect } from 'react';
import { HeaderTitle, Table } from '../Blocks/Blocks';
import ContactRow from './ContactRow';

const ContactTable = ({ contacts }) => {

    const [contactList, setContactList] = useState(contacts);

    useEffect(() => {
        setContactList(contacts);
    }, [contacts]);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <HeaderTitle>Order ID</HeaderTitle>
                        <HeaderTitle>Date</HeaderTitle>
                        <HeaderTitle>Customer</HeaderTitle>
                        <HeaderTitle>Comment</HeaderTitle>
                        <HeaderTitle>Delete</HeaderTitle>
                    </tr>
                </thead>
                <tbody>
                    {contactList.map((item, index) => (
                        <ContactRow key={index} contact={item}></ContactRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ContactTable;
