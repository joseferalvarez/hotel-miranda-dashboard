import React from 'react';
import { ContactContainer } from './ContactStyled';
import LoaderSpinner from '../../components/Blocks/LoaderSpinner';

const Contact = () => {
    return (
        <ContactContainer>
            <h1>contact</h1>

            <LoaderSpinner></LoaderSpinner>
        </ContactContainer>
    );
}

export default Contact;
