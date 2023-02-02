/**React */
import React from 'react';
/**Components */
import UserForm from '../../components/Users/UserForm';
/**Styles */
import { ViewForm } from '../../Styles/Common/ViewContainer';

/**Components */
const NewUser = () => {
    return (
        <ViewForm>
            <UserForm></UserForm>
        </ViewForm>
    );
}

export default NewUser;
