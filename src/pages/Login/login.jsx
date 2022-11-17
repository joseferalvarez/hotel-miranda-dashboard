import React, { useState } from 'react';
import { Navigate } from 'react-router';

import Button from '../../components/button';

import {
    LoginContainer,
    LoginCard,
    Logo,
    LogoIcon,
    LogoLetter,
    InputContainer,
    Input,
    Icon
} from "./LoginStyled"

import WordMark from '../../components/wordMark';
import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri";

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
            <LoginContainer>
                <LoginCard>
                    <Logo>
                        <LogoIcon>
                            <LogoLetter>H</LogoLetter>
                        </LogoIcon>
                        <WordMark></WordMark>
                    </Logo>
                    <form>
                        <InputContainer>
                            <Input type="text" className='input-user' value={user} placeholder="User" onChange={(e) => setUser(e.target.value)}></Input>
                            <Icon><FaUser className='input-icon'></FaUser></Icon>
                        </InputContainer>
                        <InputContainer>
                            <Input type="password" className='input-pass' value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)}></Input>
                            <Icon><RiLockPasswordFill className='input-icon'></RiLockPasswordFill></Icon>
                        </InputContainer>
                        <Button type="login" text="LOGIN" click={checkLogin}></Button>
                    </form>
                </LoginCard>
            </LoginContainer>
        );

    } else {
        return (
            <Navigate to="/"></Navigate>
        )
    }
}

export default Login;
