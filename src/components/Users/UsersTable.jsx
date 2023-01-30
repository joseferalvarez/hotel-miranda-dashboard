import React from 'react';
import {
    Table,
    HeaderTitle,
} from '../Blocks/Blocks';
import UsersRow from './UsersRow';
import { Checkbox } from '../Blocks/Blocks';

const UsersTable = ({ data }) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <HeaderTitle>Name</HeaderTitle>
                        <HeaderTitle>Job Desk</HeaderTitle>
                        <HeaderTitle>Contact</HeaderTitle>
                        <HeaderTitle>Status</HeaderTitle>
                        <HeaderTitle></HeaderTitle>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj, index) => (
                        <UsersRow key={index} user={obj}></UsersRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UsersTable;
