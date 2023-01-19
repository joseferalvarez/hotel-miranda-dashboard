import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpinner from '../../components/Blocks/LoaderSpinner';
import { getOneUser, resetUser } from '../../actions/actionsUser';
import { AiFillPhone, AiFillMail, AiFillCalendar } from "react-icons/ai";

const UserContainer = styled.div`
    width: 100%;

`;

const UserCard = styled.div`
    width: 60%;
    margin: auto;
    background-color: white;
    border-radius: 12px;
    margin-top: 100px;

    div:first-child{
        display: flex;
    }

    div:last-child{
        display: flex;
        flex-direction: column;
    }
`;

const Image = styled.div`
    margin: 5%;
    width: 40%;
    border-radius: 12px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
`;

const DataPrimary = styled.div`
    display: flex;
    margin: 5% 0;
    width: 45%;
    p{
        font-family: var(--font-poppins);
    }
`;

const UserName = styled.p`
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 25px;
`;

const UserId = styled.p`
    font-size: 14px;
    color: #799283;
    font-family: var(--font-poppins);
`;

const UserStatus = styled.p`
    color: ${props => props.status || "blue"};
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 600;
`;

const DataSecondary = styled.div`
    p{
        font-family: var(--font-poppins);
        font-weight: 500;
        color: #393939;
    }
`;

const Icon = styled.div`
    font-size: 20px;
    color: #135846;
`;

const DataText = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 5%;
`;


const User = () => {
    const { user } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        resetUser(dispatch);
        getOneUser(dispatch, params.iduser);
    }, []);

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
            <LoaderSpinner></LoaderSpinner>
        );
    }
}

export default User;
