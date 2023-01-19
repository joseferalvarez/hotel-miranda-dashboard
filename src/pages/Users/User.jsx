import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../../components/Blocks/LoaderSpinner';
import { getOneUser, resetUser } from '../../actions/actionsUser';

const UserContainer = styled.div`
    width: 100%;

    .content{
        padding: 50px 5%;
    }
`;

const User = () => {
    const { user } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        resetUser(dispatch);
        getOneUser(dispatch, params.iduser);
    }, []);

    if (user) {
        return (
            <UserContainer>
                <h1>user nº {user._id}</h1>
                <p>Name: {user.name}</p>
                <p>position: {user.position}</p>
                <p>email: {user.email}</p>
                <p>date: {user.date}</p>
                <p>description: {user.description}</p>
                <p>phone: {user.phone}</p>
                <p>status: {user.status ? "Active" : "Inactive"}</p>
            </UserContainer>
        );
    } else {
        return (
            <LoaderSpinner></LoaderSpinner>
        );
    }
}

export default User;
