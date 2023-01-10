import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../../features/sliceUsers";

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
        dispatch(getUser(params.iduser));
    }, []);

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
}

export default User;
