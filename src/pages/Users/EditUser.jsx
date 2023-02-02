/**React */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser, resetUser } from '../../actions/actions';

/**Components */
import UserForm from '../../components/Users/UserForm';

/**Styles */
import { ViewForm } from '../../Styles/Common/ViewContainer';

/**Components */
const EditUser = () => {

    /**States */
    const { user } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();
    const params = useParams();

    /**GET the user from back */
    useEffect(() => {
        if (user) {
            resetUser(dispatch);
        }
        getOneUser(dispatch, params.iduser);
    }, []);

    /**HTML */
    if (user) {
        return (
            <ViewForm>
                <UserForm user={user}></UserForm>
            </ViewForm>
        );
    } else {
        return (
            <></>
        );
    }
}

export default EditUser;
