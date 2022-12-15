import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IntBooking } from '../../interfaces/Booking';
import { Checkbox } from '../Blocks/Blocks';

import Button from "../Blocks/Button";

import {
    Row,
    DataContainer,
    CheckboxContainer,
    DataContainerButton,
    DataContainerCheckbox,
    GuestContainer,
    GuestName,
    GuestId,
    Status
} from "./GuestRowStyled";

type Booking = {
    guest: IntBooking;
}

const GuestRow = ({ guest }: Booking) => {
    return (
        <Row>
            <DataContainerCheckbox>
                <CheckboxContainer>
                    <Checkbox>
                        <input type="checkbox" />
                        <label>
                            <span>
                            </span>
                        </label>
                    </Checkbox>
                </CheckboxContainer>
            </DataContainerCheckbox>
            <td>
                <GuestContainer>
                    <img src={guest.photo} alt='' />
                    <div>
                        <GuestName>{guest.name}</GuestName>
                        <GuestId>#{guest.id}</GuestId>
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
            <td><Button typeButton="notes" text="View Notes" enabled={guest.description ? true : false} click=""></Button></td>
            <DataContainer className='data-container__text'>
                <p>{guest.typeroom} - {guest.numroom}</p>
            </DataContainer>
            <td>
                <Status typeStatus={guest.state}>{guest.state}</Status>
            </td>
            <DataContainerButton>
                <button><BsThreeDotsVertical className='icon' /></button>
            </DataContainerButton>
        </Row>
    );
}

export default GuestRow;
