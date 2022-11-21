import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router';
import LoginContext from '../../context/contextLogin';
import Button from '../Blocks/Button';

import {
    Card,
    UserName,
    UserEmail
} from './LoguedUserStyled';

const LoguedUser = ({ user }) => {

    const [log,] = useContext(LoginContext);
    const [editUser, setEditUser] = useState(false);
    console.log(editUser);

    return (
        <Card>
            <img className='image' src={user.photo} alt="" />
            <UserName>{user.name}</UserName>
            <UserEmail>{log.email}</UserEmail>
            {!editUser ?
                <Button type="contact" text="Edit User" click={() => setEditUser(!editUser)}></Button>
                : <Navigate to={"/users/" + log.email}></Navigate>}

        </Card>
    );
}


export default LoguedUser;
