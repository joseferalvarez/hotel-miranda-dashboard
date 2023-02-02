/**React */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/actionsUser';

/**Components */
import UsersTable from '../../components/Users/UsersTable';
import Button from '../../components/Blocks/Button';

/**Styles */
import {
    FilterTable,
    FilterButton,
    TableButtons,
    TableTools
} from '../../Styles/Common/Table';
import { ViewContainer } from '../../Styles/Common/ViewContainer';

/**Component */
const Users = () => {
    /**States */
    const { users } = useSelector((state) => state.usersReducer);
    const [userList, setUserList] = useState(users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!users.length) {
            getAllUsers(dispatch);
        }
    }, []);

    /**Set the state with all users */
    useEffect(() => {
        setUserList(users);
    }, [users]);

    /**Get all the users from state */
    const showAllUsers = () => {
        setUserList(users);
    }

    /**Filter the users by status */
    const filterByUsers = (type) => {
        setUserList(users.filter(
            (user) => user.status === type
        ))
    }

    /**Navigate to new user form */
    const pageNewUser = () => {
        navigate("/users/newuser");
    }

    return (
        <ViewContainer>
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
        </ViewContainer>
    );
}

export default Users;
