/**React */
import React from 'react';
import { Link } from "react-router-dom";
/**Styles */
import {
    Card,
    UserName,
    UserEmail
} from '../../Styles/Navegation/LoguedUser';
import {
    LinkButton
} from '../../Styles/Common/Button';

/**Component */
const LoguedUser = ({ user }) => {
    return (
        <Card>
            <img className='image' src={user.photo} alt="" />
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <LinkButton>
                <Link to={`/users/edituser/${user._id}`}>Edit user</Link>
            </LinkButton>
        </Card>
    );
}

export default LoguedUser;
