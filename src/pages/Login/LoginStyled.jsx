import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginCard = styled.div`
    background-color: white;
    display: block;
    border-radius: 8px;
    box-shadow: 0px 16px 30px #00000014;
    padding: 3%;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
`;

const LogoIcon = styled.div`
overflow: hidden;
    width: 80px;
    height: 80px;
    box-shadow: 0px 14px 24px 0px rgba(139, 139, 139, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoLetter = styled.p`
overflow: hidden;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: var(--font-poppins);
`;

const InputContainer = styled.div`
    position: relative;
`;

const Input = styled.input`
    transition: all 0.1s;
    width: 100%;
    margin: 30px 0;
    display: block;
    font-family: var(--font-poppins);
    font-size: 1.1rem;
    border: none;
    border-bottom: 1px solid #C5C5C5;
    padding-left: 30px;

    &:hover{
        border-bottom: 1px solid #135846;
    }
    &:hover~div .input-icon{
        color: #135846;
    }

    &:focus{
        outline: none;
        border-bottom: 1px solid #135846;
    }

    &:focus~div .input-icon{
        color: #135846;
    }
`;

const Icon = styled.div`
    position: absolute;
    top: 5px;
    .input-icon{
        transition: all 0.1s;
        color: #C5C5C5;
    }
`;

export {
    LoginContainer,
    LoginCard,
    Logo,
    LogoIcon,
    LogoLetter,
    InputContainer,
    Input,
    Icon
};
