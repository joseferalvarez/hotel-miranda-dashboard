import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InputText, InputTextArea } from "../Blocks/InputText";
import Button from '../Blocks/Button';
import { createOneUser, updateOneUser } from '../../actions/actionsUser';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ToastContainer, toast, Slide } from 'react-toastify';

const FormContainer = styled.div`
    background-color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin: auto;
    padding: 5%;
    align-items: center;
    gap: 30px;

    div:last-child{
        width: 70%;
    }
`;

const SelectContainer = styled.div`
    width: 70%;
    display: flex;
    gap: 50px;
`;

const Select = styled.select`
    background-color: white;
    border-radius: 1px solid #135846;
    color: #135846;
    min-width: 129px;
    border-radius: 8px;
    font-weight: 500;
    font-family: var(--font-poppins);
    padding: 13px 25px;
    height: 50px;
    &:focus{
        outline: none;
    }
`;

const InputContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    textarea{
        margin-top: 20px;
    }
`;

const UserForm = ({ user }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userForm, setUserForm] = useState({
        name: "",
        photo: "",
        position: "Manager",
        email: "",
        phone: "",
        date: "",
        description: "",
        status: 1,
        pass: ""
    });

    const [file, setFile] = useState(null);

    useEffect(() => {
        if (user) {
            setUserForm(user);
        }
    }, []);

    const editUser = () => {
        if (user._id === "63d9240a6862fdb477837201") {
            toast.error("You cannot modify the administrator");
        } else {
            setUserForm({ ...userForm, date: getActualDate() });
            updateOneUser(dispatch, user._id, userForm);
        }
    }

    const createUser = () => {
        setUserForm({ ...userForm, date: getActualDate() });
        createOneUser(dispatch, userForm);
    }

    const getActualDate = () => {
        return new Date(Date.now()).toISOString();
    };

    return (
        <>
            <FormContainer>
                <SelectContainer>
                    <Select value={userForm.status} onChange={(e) => setUserForm({ ...userForm, status: Number(e.target.value) })}>
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                    </Select>
                    <Select value={userForm.position} onChange={(e) => setUserForm({ ...userForm, position: e.target.value })}>
                        <option value={"Manager"}>Manager</option>
                        <option value={"Room service"}>Room service</option>
                        <option value={"Reception"}>Reception</option>
                    </Select>
                </SelectContainer>
                <InputContainer>
                    <InputText type="text" placeholder='Full name' value={userForm.name} onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}></InputText>
                    <InputText type="text" placeholder='Email' value={userForm.email} onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}></InputText>
                    <InputText type="text" placeholder='Phone' value={userForm.phone} onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}></InputText>
                    <InputText type="password" placeholder='Password' value={userForm.pass} onChange={(e) => setUserForm({ ...userForm, pass: e.target.value })}></InputText>
                    <InputTextArea type="text" placeholder='description' value={userForm.description} onChange={(e) => setUserForm({ ...userForm, description: e.target.value })}></InputTextArea>
                </InputContainer>
                <div>
                    <input type="file" multiple accept="image/*" onChange={(e) => setFile(e.target.files)} />
                </div>
                <div>
                    {user ?
                        <Button type={"create"} text={"Update user"} click={() => editUser()}></Button> :
                        <Button type={"create"} text={"Create new user"} click={() => createUser()} enabled></Button>}
                </div>
            </FormContainer>
            <ToastContainer position='bottom-right' theme='dark' autoClose={1500} transition={Slide} />
        </>
    );
}

export default UserForm;
