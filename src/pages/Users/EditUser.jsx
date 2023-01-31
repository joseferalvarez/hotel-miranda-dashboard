import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneUser, resetUser } from '../../actions/actions';
import styled from 'styled-components';
import LoaderSpinner from '../../components/Blocks/LoaderSpinner';
import UserForm from '../../components/Users/UserForm';

const FormContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;

const EditUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.usersReducer);
    const params = useParams();

    useEffect(() => {
        resetUser(dispatch);
        getOneUser(dispatch, params.iduser);
    }, []);

    if (user) {
        return (
            <FormContainer>
                <UserForm user={user}></UserForm>
            </FormContainer>
        );
    } else {
        return (
            <LoaderSpinner></LoaderSpinner>
        );
    }

}

export default EditUser;
