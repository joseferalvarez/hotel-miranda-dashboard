import React from 'react';
import styled from 'styled-components';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    transition: box-shadow 0.2s;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }

    .data,
    .user__data{
        font-family: var(--font-poppins);
        color: #393939;
    }
`;

const DataContainer = styled.td`
    vertical-align: top;

    &~.data-container__button{
        vertical-align: top;
        padding-right: 30px;
    }

    .checkbox{
        width: 24px;
        height: 24px;
        margin-top: 20px;

        &__container{
            padding-left: 30px;
        }
    }

    .data{
        &__description{
            max-width: 300px;
            padding-left: 30px;
        }

        &__contact{
            color: #212121;
            font-weight: 600;
            font-size: 14px;
            padding-left: 30px;
            span{
                margin-left: 10px;
            }
        }
    }

    button{
        background-color: transparent;
        border: none;
        margin-left: 60px;
        margin-top: 15px;
        width: 24px;
        height: 24px;
        .icon{
            width: 25px;
            height: 25px;
            padding-right: 30px;
        }
    }
`;

const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;

    img{
        border-radius: 8px;
        width: 88px;
        height: 88px;
        object-fit: cover;
    }

    .user__data{
        &__name{
            font-weight: 500;
        }

        &__id,
        &__date{
            font-size: 14px;
        }
    }
`;

const UserStatus = styled.p`
    color: ${props => props.status || "blue"};
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
`;

const UsersRow = ({ user }) => {
    return (
        <Row>
            <DataContainer>
                <div className='checkbox__container'>
                    <input className='checkbox' type="checkbox"></input>
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
