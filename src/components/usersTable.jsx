import React from 'react';
import { Table, HeaderTitle } from './blocks';
import UsersRow from './usersRow';

const UsersTable = (props) => {
    return (
        <Table>
            <tr>
                <HeaderTitle><input className='checkbox' type="checkbox"></input></HeaderTitle>
                <HeaderTitle>Name</HeaderTitle>
                <HeaderTitle>Job Desk</HeaderTitle>
                <HeaderTitle>Contact</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
                <HeaderTitle></HeaderTitle>
            </tr>


            {props.data.map((obj) => (
                <UsersRow user={obj}></UsersRow>
            ))}
        </Table>
    );
}

export default UsersTable;
