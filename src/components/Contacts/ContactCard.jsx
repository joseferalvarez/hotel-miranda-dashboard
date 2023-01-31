import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { updateOneContact } from '../../actions/actionsContact';

const Contact = styled.div`
    width: 430px;
    height: 275px;
    background-color: #FFFFFF;
    border-radius: 20px;
    position: relative;
    box-shadow: 5px 5px 5px #00000008;
    margin: 10px;

    .button{
        position: absolute;
        bottom: 5px;
        right: 15px;
        background-color: transparent;
        border: none;
        font-size: 24px;
        color: #5AD07A;
    }
`;

const Comment = styled.p`
    ${(props) => {
        if (props.big) {
            return css`
                overflow: scroll;
                height: 100%;
            `;
        } else {
            return css`
                overflow: hidden;
                text-overflow: ellipsis;
                height: 100px;
            `;
        }
    }}
    transition: all 0.3s;
    font-family: var(--font-poppins);
    color: #4E4E4E;
    padding: 5%;
`;
const User = styled.div`
    ${(props) => {
        if (props.big) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: flex;
            `;
        }
    }}

    padding: 5%;
`;

const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;

    p{
        margin: 5px;
    }

    p:first-child{
        font-family: var(--font-poppins);
        font-weight: 600;
        color: #262626;
    }

    p:last-child{
        font-family: var(--font-poppins);
        color: #799283;
    }
`;

const Buttons = styled.div`
    display: flex;
    button{
        background-color: transparent;
        border: none;
        font-size: 24px;
    }
    button:first-child{
        color: #5AD07A;
    }
    button:last-child{
        color: #E23428;
    }
`;

const ContactCard = ({ contact }) => {

    const dispatch = useDispatch();
    const [doBigger, setDoBigger] = useState(false);

    const setArchived = () => {
        updateOneContact(dispatch, contact._id, { ...contact, archived: 0 });
    };

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
