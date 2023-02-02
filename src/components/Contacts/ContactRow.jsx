/**React */
import React from 'react';
/**Redux */
import { useDispatch } from 'react-redux';
import { deleteOneContact } from '../../actions/actionsContact';
/**Styles */
import { Row } from "../../Styles/Contacts/ContactRow"

/**Components */
const ContactRow = ({ contact }) => {
    /**States */
    const dispatch = useDispatch();

    /**Delete the contact */
    const deleteMessage = () => {
        deleteOneContact(dispatch, contact._id);
    };

    /**HTML */
    return (
        <Row>
            <td>#{contact._id}</td>
            <td>{contact.date}</td>
            <td>{contact.customer}</td>
            <td>
                <div>
                    <p>{contact.header}</p>
                    <p>{contact.comment}</p>
                </div>
            </td>
            <td>
                <button onClick={deleteMessage}>DELETE</button>
            </td>
        </Row>
    );
}

export default ContactRow;
