import React from 'react';
import { Table, HeaderTitle } from './blocks';
import UsersRow from './usersRow';
import { Checkbox } from './blocks';

const UsersTable = (props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <HeaderTitle>
                        <Checkbox>
                            <input type="checkbox" className="checkbox-input" id="checkbox" />
                            <label>
                                <span className="checkbox">
                                </span>
                            </label>
                        </Checkbox>
                    </HeaderTitle>
                    <HeaderTitle>Name</HeaderTitle>
                    <HeaderTitle>Job Desk</HeaderTitle>
                    <HeaderTitle>Contact</HeaderTitle>
                    <HeaderTitle>Status</HeaderTitle>
                    <HeaderTitle></HeaderTitle>
                </tr>
            </thead>
            <tbody>
                {props.data.map((obj, index) => (
                    <UsersRow key={index} user={obj}></UsersRow>
                ))}
            </tbody>
        </Table>

    );
}

export default UsersTable;