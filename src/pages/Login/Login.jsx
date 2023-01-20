import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';

import Button from '../../components/Blocks/Button';
import Logo from '../../components/Logo/Logo';

import {
    LoginContainer,
    LoginCard,
    LogoContainer,
    InputContainer,
    Input,
    Icon
} from "./LoginStyled"

import { FaUser } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDB } from '../../actions/actionsLogin';

const Login = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.loginReducer);

    const [email, setEmail] = useState("josefer@gmail.com");
    const [pass, setPass] = useState("1234");

    const checkLogin = (e) => {
        e.preventDefault();
        getUserDB(dispatch, email, pass);
    }

    if (!user || !token) {
        return (
            <LoginContainer>
                <LoginCard>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <form>
                        <InputContainer>
                            <Input type="text" className='input-user' value={email} placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}></Input>
                            <Icon><FaUser className='input-icon'></FaUser></Icon>
                        </InputContainer>
                        <InputContainer>
                            <Input type="password" className='input-pass' value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)}></Input>
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
