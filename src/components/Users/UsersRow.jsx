import React, { useState } from 'react';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Checkbox } from '../Blocks/Blocks';
import { deleteUser } from "../../features/sliceUsers";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import {
    Row,
    DataContainer,
    DataContainerButton,
    CheckboxContainer,
    UserNameContainer,
    UserName,
    UserData,
    UserStatus,
    DropDown
} from "./UsersRowStyled.jsx";



const UsersRow = ({ user }) => {

    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eraseUser = () => {
        dispatch(deleteUser())
    };

    const getUserEdit = () => {
        navigate(`/users/edituser/${user._id}`);
    }

    const getUserDetails = () => {
        navigate(`/users/${user._id}`);
    }

    return (
        <Row>
            <DataContainer>
                <CheckboxContainer>
                    <Checkbox>
                        <input type="checkbox" />
                        <label>
                            <span>
                            </span>
                        </label>
                    </Checkbox>
                </CheckboxContainer>
            </DataContainer>

            <td>
                <UserNameContainer>
                    <img src={user.photo} alt="" />
                    <div>
                        <UserName>{user.name}</UserName>
                        <UserData>#{user._id}</UserData>
                        <UserData>Joined on {user.date}</UserData>
                    </div>
                </UserNameContainer>
            </td>

            <DataContainer>
                <p className='data__description'>{user.description}</p>
            </DataContainer>

            <DataContainer>
                <p className='data__contact'>
                    <HiOutlinePhone />
                    <span>{user.phone}</span>
                </p>
                <p className='data__contact'>
                    <HiOutlineMail />
                    <span>{user.email}</span>
                </p>
            </DataContainer>

            <DataContainer>
                <UserStatus status={user.status ? "#5AD07A" : "#E23428"}>{user.status ? "ACTIVE" : "INACTIVE"}</UserStatus>
            </DataContainer>
            <DataContainerButton>
                <button onClick={() => setShowOptions(!showOptions)}><BsThreeDotsVertical className='icon' /></button>
                {showOptions ?
                    <DropDown>
                        <ul>
                            <li><button onClick={getUserDetails}>User Details</button></li>
                            <li><button onClick={getUserEdit}>Edit User</button></li>
                            <li><button onClick={eraseUser}>Delete User</button></li>
                        </ul>
                    </DropDown> : null}
            </DataContainerButton>
        </Row>
    );
}

export default UsersRow;
