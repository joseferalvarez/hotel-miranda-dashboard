import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersTable from '../../components/Users/UsersTable';
import { filterUsers, getApiUsers } from '../../features/sliceUsers';
import { UsersContainer } from './UsersStyled';
import Button from '../../components/Blocks/Button';
import Select from '../../components/Blocks/Select';

import {
    FilterTable,
    FilterButton,
    TableButtons,
    TableTools
} from '../../components/Blocks/Blocks';

const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersReducer);

    useEffect(() => {
        dispatch(getApiUsers());
    }, [dispatch]);

    const getAllUsers = () => {
        dispatch(getApiUsers());
    }

    const filterByUsers = (type) => {
        getAllUsers();
        setTimeout(() => {
            dispatch(filterUsers(type));
        }, 0);

    }

    return (
        <UsersContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton onClick={getAllUsers}>All Employee</FilterButton>
                        <FilterButton onClick={() => filterByUsers(true)}>Active Employee</FilterButton>
                        <FilterButton onClick={() => filterByUsers(false)}>Inactive Employee</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Button type="create" text="+ New Employee"></Button>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <UsersTable data={users}></UsersTable>
            </div>
        </UsersContainer>
    );
}

export default Users;
