import React from 'react';
import UsersTable from '../components/usersTable';
import data from "../db/users.json"

const Users = () => {
    return (
        <div>
            <UsersTable data={data}></UsersTable>
        </div>
    );
}

export default Users;
