import React, { useState } from 'react';
import { Navigate } from 'react-router';

const Login = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [login, setLogin] = useState(localStorage.getItem("login"));

    let userHard = "JoseFer";
    let passHard = "1234";

    const checkLogin = () => {
        if (userHard === user && passHard === pass) {
            localStorage.setItem("login", true);
            setLogin(localStorage.getItem("login"));
        } else {
            alert("usuario o contraseña incorrectos");
        }
    }

    if (!login) {
        return (
            <div>
                <h1>login</h1>
                <input type="text" value={user} placeholder="Usuario" onChange={(e) => setUser(e.target.value)}></input>
                <input type="text" value={pass} placeholder="Contraseña" onChange={(e) => setPass(e.target.value)}></input>
                <button onClick={checkLogin}>LOGIN</button>
            </div>
        );

    } else {
        return (
            <Navigate to="/"></Navigate>
        )
    }
}

export default Login;
