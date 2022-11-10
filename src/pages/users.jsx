import React from 'react';
import UsersTable from '../components/usersTable';
import data from "../db/users.json";
import styled from 'styled-components';
import Topbar from '../components/topbar';

const UsersContainer = styled.div`
    width: 100%;

    .content{
        padding: 50px 5%;
    }
`;

const Users = () => {
    return (
        <UsersContainer>
            <Topbar title="Users"></Topbar>
            <div className='content'>
                <UsersTable data={data}></UsersTable>
            </div>
        </UsersContainer>
    );
}

export default Users;
