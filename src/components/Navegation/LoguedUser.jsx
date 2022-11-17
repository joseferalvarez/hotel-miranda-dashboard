import React from 'react';
import Button from '../Blocks/Button';

import {
    Card,
    UserName,
    UserEmail
} from './LoguedUserStyled';

const LoguedUser = ({ user }) => {
    return (
        <Card>
            <img className='image' src={user.photo} alt="" />
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <Button type="contact" text="Contact Us"></Button>
        </Card>
    );
}

export default LoguedUser;
