import React from 'react';
import styled, { css } from 'styled-components';
import { BsThreeDotsVertical } from "react-icons/bs";


const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    transition: box-shadow 0.2s;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }
`;

const GuestContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    margin-left: 25px;

    img{
        border-radius: 8px;
        width: 45px;
        height: 45px;
        object-fit: cover;
    }

    .guest__data{
        &__name{
            font-family: var(--font-poppins);
            font-size: 16px;
            font-weight: 500px;
            color: #393939;
        }

        &__id{
            color: #799283;
            font-size: 14px;
            font-family: var(--font-poppins);
        }
    }
`;

const DataContainer = styled.td`
    &~.data-container__button{
        vertical-align: top;
        padding-right: 30px;
    }

    &~.data-container__checkbox{
        vertical-align: middle;
    }

    &~.data-container__text{
        vertical-align: top;

        p{
            font-family: var(--font-poppins);
        color: #393939;
        font-size: 16px;
        max-width: 300px;
        padding-left: 30px;
        }
    }

    .checkbox{
        width: 24px;
        height: 24px;
        &__container{
            padding-left: 30px;
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
        }
    }
`;

const NotesButton = styled.button`
    ${(props) => {
        if (props.$enabled) {
            return css`
                background-color: #EEF9F2;
                font-weight: 500;
                border: none;
                color: #212121;
            `;
        } else {
            return css`
                pointer-events: none;
                background-color: #EEF9F2;
                font-weight: 500;
                border: 1px solid #799283;
                color: #799283;
            `;
        }
    }
    }

    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

const Status = styled.p`

    ${(props) => {
        switch (props.$type) {
            case "Check In":
                return css`
                    background-color: #E8FFEE;
                    color: #5AD07A;
            `;
            case "Check Out":
                return css`
                    background-color: #FFEDEC;
                    color: #E23428;
            `;
            case "In Progress":
                return css`
                    background-color: #fbfcc2;
                    color: #ffbb00;
            `;
            default:
                return css`
                background-color: blue;
                color: white;
        `;
        }
    }
    }
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

const GuestRow = ({ guest }) => {
    return (
        <Row>
            <DataContainer className='data-container__checkbox'>
                <div className='checkbox__container'>
                    <input className='checkbox' type="checkbox"></input>
                </div>
            </DataContainer>
            <td>
                <GuestContainer>
                    <img src={guest.photo} alt='' />
                    <div className='guest__data'>
                        <p className='guest__data__name'>{guest.name}</p>
                        <p className='guest__data__id'>#{guest.id}</p>
                    </div>
                </GuestContainer>
            </td>
            <DataContainer className='data-container__text'>
                <p>{guest.order}</p>
            </DataContainer>
            <DataContainer className='data-container__text'>
                <p>{guest.checkin}</p>
            </DataContainer>
            <DataContainer className='data-container__text'>
                <p>{guest.checkout}</p>
            </DataContainer>
            <td><NotesButton $enabled={guest.description}>View Notes</NotesButton></td>
            <DataContainer className='data-container__text'>
                <p>{guest.typeroom} - {guest.numroom}</p>
            </DataContainer>
            <td>
                <Status $type={guest.state}>{guest.state}</Status>
            </td>
            <DataContainer className='data-container__button'>
                <button><BsThreeDotsVertical className='icon' /></button>
            </DataContainer>
        </Row>
    );
}

export default GuestRow;
