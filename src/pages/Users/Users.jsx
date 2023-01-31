import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersTable from '../../components/Users/UsersTable';
import { UsersContainer } from './UsersStyled';
import Button from '../../components/Blocks/Button';

import {
    FilterTable,
    FilterButton,
    TableButtons,
    TableTools
} from '../../components/Blocks/Blocks';
import { useNavigate } from 'react-router';
import { getAllUsers } from '../../actions/actionsUser';
import { ToastContainer, Slide } from 'react-toastify';

const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersReducer);
    const [userList, setUserList] = useState(users);
    const navigate = useNavigate();

    useEffect(() => {
        if (users.length === 0) {
            getAllUsers(dispatch);
        }
        setUserList(users);
    }, [users, dispatch]);

    const showAllUsers = () => {
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
                        <FilterButton onClick={showAllUsers}>All Employee</FilterButton>
                        <FilterButton onClick={() => filterByUsers(1)}>Active Employee</FilterButton>
                        <FilterButton onClick={() => filterByUsers(0)}>Inactive Employee</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Button type="create" text="+ New Employee" click={pageNewUser}></Button>
                    </TableButtons>
                </TableTools>
                <UsersTable data={userList}></UsersTable>
            </div>
            <ToastContainer position='bottom-right' autoClose={1500} theme='dark' transition={Slide} />
        </UsersContainer>
    );
}

export default Users;
