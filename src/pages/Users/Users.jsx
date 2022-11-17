import React from 'react';
import UsersTable from '../../components/Users/UsersTable';
import data from "../../db/users.json";
import { UsersContainer } from './UsersStyled';

const Users = () => {
    return (
        <UsersContainer>
            <div className='content'>
                <UsersTable data={data}></UsersTable>
            </div>
        </UsersContainer>
    );
}

export default Users;
