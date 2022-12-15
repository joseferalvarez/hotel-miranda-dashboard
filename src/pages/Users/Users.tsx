import React, { useEffect, useState } from 'react';
import UsersTable from '../../components/Users/UsersTable';
import { getApiUsers } from '../../features/sliceUsers/sliceUsers';
import { UsersContainer } from './UsersStyled';
import Button from '../../components/Blocks/Button';
import Select from '../../components/Blocks/Select';

import {
    FilterTable,
    FilterButton,
    TableButtons,
    TableTools
} from '../../components/Blocks/Blocks';
import { useAppDispatch, useAppSelector } from '../../App/hooks/hooks';
import { IntUser } from '../../interfaces/Users';

type User = {
    users: IntUser[];
};

const Users = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector<User>(state => state.usersReducer);
    const [userList, setUserList] = useState<IntUser[]>(users);

    useEffect((): void => {
        if (users.length === 0) {
            dispatch(getApiUsers());
        }
        setUserList(users);
    }, [users, dispatch]);

    const getAllUsers = (): void => {
        setUserList(users);
    }

    const filterByUsers = (type: boolean) => {
        setUserList(users.filter(
            (user: IntUser) => user.state === type
        ))

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
                        <Button typeButton="create" text="+ New Employee" enabled={false} click={""}></Button>
                        <Select typeSelect="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <UsersTable data={userList}></UsersTable>
            </div>
        </UsersContainer>
    );
}

export default Users;
