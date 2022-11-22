import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import LoginContext from "../../context/contextLogin";
import { updateUser } from "../../context/actions";
import styled from 'styled-components';

const UserContainer = styled.div`
    width: 100%;

    .content{
        padding: 50px 5%;
    }
`;

const User = () => {
    let params = useParams();

    const [log, setLog] = useContext(LoginContext);
    const [email, setEmail] = useState(log.email);

    const changeUser = () => {
        setLog(updateUser({ auth: true, email: email }));
        localStorage.setItem("login", JSON.stringify({ auth: true, email: email }));
    }

    return (
        <UserContainer>
            <h1>user nº{params.iduser}</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={changeUser}>Edit User</button>
        </UserContainer>
    );
}

export default User;
