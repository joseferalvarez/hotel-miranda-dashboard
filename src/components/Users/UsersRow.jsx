import React from 'react';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Checkbox } from '../Blocks/Blocks';

import {
    Row,
    DataContainer,
    DataContainerButton,
    CheckboxContainer,
    UserNameContainer,
    UserName,
    UserData,
    UserStatus
} from "./UsersRowStyled.jsx";



const UsersRow = ({ user }) => {
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
                <button><BsThreeDotsVertical className='icon' /></button>
            </DataContainerButton>
        </Row>
    );
}

export default UsersRow;
