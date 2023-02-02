/**React */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
/**Redux */
import { useDispatch } from 'react-redux';
import { deleteOneUser } from '../../actions/actions';
/**Toast */
import { toast } from 'react-toastify';
/**Styles */
import {
    DataContainer,
    DataContainerButton,
    UserNameContainer,
    UserName,
    UserData,
    UserStatus
} from "../../Styles/Users/UserRow";
import { Row, DropDown } from '../../Styles/Common/Row';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

/**Component */
const UsersRow = ({ user }) => {
    /**States */
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /**DELETE an user */
    const eraseUser = () => {
        if (user._id === "63d9240a6862fdb477837201") {
            toast.error("You cannot delete the administrator");
        } else {
            deleteOneUser(dispatch, user._id);
        }
    };

    /**Navigate to user form */
    const getUserEdit = () => {
        navigate(`/users/edituser/${user._id}`);
    }

    /**Navigate to user form */
    const getUserDetails = () => {
        navigate(`/users/${user._id}`);
    }

    /**HTML */
    return (
        <Row>
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
