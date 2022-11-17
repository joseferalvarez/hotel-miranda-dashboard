import React from 'react';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Checkbox } from '../Blocks/blocks';

import {
    Row,
    DataContainer,
    UserNameContainer,
    UserStatus
} from "./UsersRowStyled.jsx";



const UsersRow = ({ user }) => {
    return (
        <Row>
            <DataContainer>
                <div className='checkbox__container'>
                    <Checkbox>
                        <input type="checkbox" className="checkbox-input" id="checkbox" />
                        <label>
                            <span className="checkbox">
                            </span>
                        </label>
                    </Checkbox>
                </div>
            </DataContainer>
            <td>
                <UserNameContainer>
                    <img src={user.photo} alt="" />
                    <div className='user__data'>
                        <p className='user__data__name'>{user.name}</p>
                        <p className='user__data__id'>#{user.id}</p>
                        <p className='user__data__date'>Joined on {user.date}</p>
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
                <UserStatus status={user.state ? "#5AD07A" : "#E23428"}>{user.state ? "ACTIVE" : "INACTIVE"}</UserStatus>
            </DataContainer>
            <DataContainer className='data-container__button'>
                <button><BsThreeDotsVertical className='icon' /></button>
            </DataContainer>
        </Row>
    );
}

export default UsersRow;
