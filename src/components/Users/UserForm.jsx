/**React */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
/**Redux */
import { createOneUser, resetUser, updateOneUser } from '../../actions/actionsUser';
import { useDispatch } from 'react-redux';
/**Components */
import { InputText, InputTextArea } from "../Blocks/InputText";
import Button from '../Blocks/Button';
/**Toast */
import { toast } from 'react-toastify';
/**Styles */
import {
    InputContainer,
    FormContainer,
    SelectContainer
} from '../../Styles/Common/Form';
import { Select } from "../../Styles/Common/Select"

/**Component */
const UserForm = ({ user }) => {
    /**States */
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

    /**GET the user props*/
    useEffect(() => {
        setUserForm(user);
    }, []);

    /**Edit the user*/
    const editUser = () => {
        if (user._id === "63d9240a6862fdb477837201") {
            toast.error("You cannot modify the administrator");
        } else {
            setUserForm({ ...userForm, date: getActualDate() });
            updateOneUser(dispatch, user._id, userForm);
            navigate("/users");
        }
    }

    /**Create a new user */
    const createUser = () => {
        setUserForm({ ...userForm, date: getActualDate() });
        createOneUser(dispatch, userForm);
        navigate("/users");
    }

    /**Get the actual date */
    const getActualDate = () => {
        return new Date().toISOString();
    };

    /**HTML */
    return (
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
                {user ?
                    <Button type={"create"} text={"Update user"} click={() => editUser()}></Button> :
                    <Button type={"create"} text={"Create new user"} click={() => createUser()} enabled></Button>}
            </div>
        </FormContainer>
    );
}

export default UserForm;
