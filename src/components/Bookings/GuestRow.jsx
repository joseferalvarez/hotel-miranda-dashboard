import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Checkbox } from '../Blocks/blocks';

import Button from "../Blocks/Button";

import {
    Row,
    DataContainer,
    GuestContainer,
    Status
} from "./GuestRowStyled";

const GuestRow = ({ guest }) => {
    return (
        <Row>
            <DataContainer className='data-container__checkbox'>
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
            <td><Button type="notes" text="View Notes" enabled={guest.description}></Button></td>
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
