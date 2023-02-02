/**React */
import React from 'react';
/**Components */
import ContactRow from './ContactRow';
/**Styles */
import {
    HeaderTitle,
    Table
} from '../../Styles/Common/Table';

/**Components */
const ContactTable = ({ contacts }) => {
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
                    {contacts.map((item, index) => (
                        <ContactRow key={index} contact={item}></ContactRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ContactTable;
