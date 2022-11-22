import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersTable from '../../components/Users/UsersTable';
import { getApiUsers } from '../../features/sliceUsers';
import { UsersContainer } from './UsersStyled';

const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.usersReducer);

    useEffect(() => {
        dispatch(getApiUsers());
    }, [dispatch, users]);

    return (
        <UsersContainer>
            <div className='content'>
                <UsersTable data={users}></UsersTable>
            </div>
        </UsersContainer>
    );
}

export default Users;
