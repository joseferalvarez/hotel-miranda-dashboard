import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/topbar';

const ContactContainer = styled.div`
    width: 100%;
`;

const Contact = () => {
    return (
        <ContactContainer>
            <Topbar title="Contact"></Topbar>
            <h1>contact</h1>
        </ContactContainer>
    );
}

export default Contact;
