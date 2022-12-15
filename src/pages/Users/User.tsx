import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import LoginContext from "../../context/contextLogin";
import { updateUser } from "../../context/actions";
import { UserContainer } from './UserStyled';

const User = (): JSX.Element => {
    let params = useParams<string>();

    const [log, setLog] = useContext<any>(LoginContext);
    const [email, setEmail] = useState<string>(log.email);

    const changeUser = (): void => {
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
