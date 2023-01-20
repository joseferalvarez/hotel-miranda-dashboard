import React from 'react';
import styled from 'styled-components';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

const Contact = styled.div`
    width: 430px;
    height: 275px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const Comment = styled.p`
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-poppins);
    color: #4E4E4E;
    padding: 5%;
`;
const User = styled.div`
    display: flex;
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

    const formatDate = (date) => {
        const actualDate = new Date(Date.now()).getTime();
        const messageDate = new Date(date).getTime();
        const month = (1000 * 60 * 60 * 24 * 30);

        const formatDate = actualDate - messageDate;

        return Math.floor(formatDate / month);
    }

    return (
        <Contact>
            <Comment>{contact.comment}</Comment>
            <User>
                <Data>
                    <p>{contact.customer}</p>
                    <p>{formatDate(contact.date)} months ago</p>
                </Data>
                <Buttons>
                    <button><RxCheckCircled /></button>
                    <button><RxCrossCircled /></button>
                </Buttons>
            </User>
        </Contact>
    );
}

export default ContactCard;
