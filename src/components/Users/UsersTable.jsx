import React from 'react';
import {
    Table,
    HeaderTitle,
    FilterTable,
    FilterButton,
    TableButtons,
    TableTools
} from '../Blocks/Blocks';
import UsersRow from './UsersRow';
import { Checkbox } from '../Blocks/Blocks';
import Button from '../Blocks/Button';
import Select from '../Blocks/Select';

const UsersTable = (props) => {
    return (
        <div>
            <TableTools>
                <FilterTable>
                    <FilterButton>All Employee</FilterButton>
                    <FilterButton>Active Employee</FilterButton>
                    <FilterButton>Inactive Employee</FilterButton>
                </FilterTable>
                <TableButtons>
                    <Button type="create" text="+ New Employee"></Button>
                    <Select type="white" options={["Newest"]}></Select>
                </TableButtons>
            </TableTools>
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
        </div>
    );
}

export default UsersTable;
