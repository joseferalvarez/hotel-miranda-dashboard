import React from 'react';
import styled from 'styled-components';
import { deleteOneContact } from '../../actions/actionsContact';
import { useDispatch } from 'react-redux';

const Row = styled.tr`
    opacity: ${props => props.opacity || 1};
    border-top: 1px solid #D4D4D4;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }

    td{
        font-family: var(--font-poppins);
        color: #393939;
        width: 15%;
        padding-left: 30px;
    }

    td:nth-child(4){
        width: 45%;

        p:first-child{
            font-weight: 600;
        }
    }

    button{
        font-family: var(--font-poppins);
        font-size: 16px;
        border: none;
        background-color: transparent;
        color: #E23428;
    }
`;

const ContactRow = ({ contact }) => {

    const dispatch = useDispatch();

    const deleteMessage = () => {
        deleteOneContact(dispatch, contact._id);
    };

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
