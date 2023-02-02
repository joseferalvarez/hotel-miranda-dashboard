/**React */
import React from 'react';
/**Components */
import UsersRow from './UsersRow';
/**Styles */
import {
    Table,
    HeaderTitle,
} from '../../Styles/Common/Table';

/**Component */
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
