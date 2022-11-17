import React from 'react';
import Button from '../Blocks/Button';

import { Card } from './LoguedUserStyled';

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
