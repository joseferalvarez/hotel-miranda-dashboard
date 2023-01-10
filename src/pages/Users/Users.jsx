import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersTable from '../../components/Users/UsersTable';
import { getApiUsers } from '../../features/sliceUsers';
import { UsersContainer } from './UsersStyled';
import Button from '../../components/Blocks/Button';
import Select from '../../components/Blocks/Select';

import {
    FilterTable,
    FilterButton,
    TableButtons,
    TableTools
} from '../../components/Blocks/Blocks';
import { useNavigate } from 'react-router';

const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersReducer);
    const [userList, setUserList] = useState(users);
    const navigate = useNavigate();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getApiUsers());
        }
        setUserList(users);
    }, [users, dispatch]);

    const getAllUsers = () => {
        setUserList(users);
    }

    const filterByUsers = (type) => {
        setUserList(users.filter(
            (user) => user.status === type
        ))
    }

    const pageNewUser = () => {
        navigate("/users/newuser");
    }

    return (
        <UsersContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton onClick={getAllUsers}>All Employee</FilterButton>
                        <FilterButton onClick={() => filterByUsers(1)}>Active Employee</FilterButton>
                        <FilterButton onClick={() => filterByUsers(0)}>Inactive Employee</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Button type="create" text="+ New Employee" click={pageNewUser}></Button>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <UsersTable data={userList}></UsersTable>
            </div>
        </UsersContainer>
    );
}

export default Users;
