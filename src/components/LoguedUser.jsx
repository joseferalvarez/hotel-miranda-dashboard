import React from 'react';
import styled from 'styled-components';
import Button from './button';

const Card = styled.div`
    width: 100%;
    max-width: 200px;
    height: 200px;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 0px 20px 30px #00000014;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image{
        width: 70px;
        height: 70px;
        object-fit: cover;
        display: block;
        margin: auto;
        border-radius: 8px;
    }

    .name{
        color: #393939;
        font-family: var(--font-poppins);
        text-align: center;
        font-weight: 500;
    }

    .email{
        color: #B2B2B2;
        font-family: var(--font-poppins);
        font-size: 12px;
        text-align: center;
    }
`;

const LoguedUser = ({ user }) => {
    return (
        <Card>
            <img className='image' src={user.photo} alt="" />
            <p className='name'>{user.name}</p>
            <p className='email'>{user.email}</p>
            <Button type="contact" text="Contact Us"></Button>
        </Card>
    );
}

export default LoguedUser;
