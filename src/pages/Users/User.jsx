/**React */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser, resetUser } from '../../actions/actionsUser';

/**Styles */
import {
    AiFillPhone,
    AiFillMail,
    AiFillCalendar
} from "react-icons/ai";
import {
    UserContainer,
    UserCard,
    Image,
    DataPrimary,
    UserName,
    UserId,
    UserStatus,
    DataSecondary,
    Icon,
    DataText
} from "../../Styles/Users/UserCard"

/**Components */
const User = () => {
    /**States */
    const { user } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();
    const params = useParams();

    /**GET the user from backend */
    useEffect(() => {
        if (user) {
            resetUser(dispatch);
        }
        getOneUser(dispatch, params.iduser);
    }, []);

    /**HTML */
    if (user) {
        return (
            <UserContainer>
                <UserCard>
                    <div>
                        <Image>
                            <img src={user.photo} alt=''></img>
                        </Image>
                        <DataPrimary>
                            <UserName>{user.name}</UserName>
                            <UserId>#{user._id}</UserId>
                            <div>
                                <p>{user.position}</p>
                                <UserStatus status={user.status ? "#5AD07A" : "#E23428"}>{user.status ? "ACTIVE" : "INACTIVE"}</UserStatus>
                            </div>
                        </DataPrimary>
                    </div>
                    <DataSecondary>
                        <DataText><Icon><AiFillMail /></Icon><p>{user.email}</p></DataText>
                        <DataText><Icon><AiFillPhone /></Icon><p>{user.phone}</p></DataText>
                        <DataText><Icon><AiFillCalendar /></Icon><p>{user.date}</p></DataText>
                        <DataText><p>{user.description}</p></DataText>
                    </DataSecondary>
                </UserCard>
            </UserContainer >
        );
    } else {
        return (
            <></>
        );
    }
}

export default User;
