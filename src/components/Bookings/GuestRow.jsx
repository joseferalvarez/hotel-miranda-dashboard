import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
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

const GuestRow = ({ guest }) => {
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
            <td><Button type="notes" text="View Notes" enabled={guest.description}></Button></td>
            <DataContainer className='data-container__text'>
                <p>{guest.typeroom} - {guest.numroom}</p>
            </DataContainer>
            <td>
                <Status $type={guest.state}>{guest.state}</Status>
            </td>
            <DataContainerButton>
                <button><BsThreeDotsVertical className='icon' /></button>
            </DataContainerButton>
        </Row>
    );
}

export default GuestRow;
