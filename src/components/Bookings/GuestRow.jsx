import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Checkbox } from '../Blocks/Blocks';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { deleteBooking } from "../../features/sliceBookings.js";

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
    Status,
    DropDown
} from "./GuestRowStyled";

const GuestRow = ({ booking }) => {

    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const eraseBooking = () => {
        dispatch(deleteBooking(booking._id));
    }

    const getBookingEdit = () => {
        navigate("/bookings/editbooking/" + booking._id);
    }

    const getBookingDetails = () => {
        navigate("/bookings/" + booking._id);
    }

    const [status, setStatus] = useState(0);

    useEffect(() => {
        switch (booking.status) {
            case 0:
                setStatus("CHECK OUT");
                break;
            case 1:
                setStatus("CHECK IN");
                break;
            case 2:
                setStatus("IN PROGRESS");
                break;
            default:
                setStatus("CHECK OUT");
                break;
        }
    }, []);

    return (
        <Row>
            <td>
                <GuestContainer>
                    <img src={booking.photos[0]} alt='' />
                    <div>
                        <GuestName>{booking.name}</GuestName>
                        <GuestId>#{booking._id}</GuestId>
                    </div>
                </GuestContainer>
            </td>
            <DataContainer className='data-container__text'>
                <p>{booking.order}</p>
            </DataContainer>
            <DataContainer className='data-container__text'>
                <p>{booking.checkin}</p>
            </DataContainer>
            <DataContainer className='data-container__text'>
                <p>{booking.checkout}</p>
            </DataContainer>
            <td><Button type="notes" text="View Notes" enabled={booking.description}></Button></td>
            <DataContainer className='data-container__text'>
                <p>{booking.type} - {booking.numroom}</p>
            </DataContainer>
            <td>
                <Status $type={booking.status}>{status}</Status>
            </td>
            <DataContainerButton>
                <button onClick={() => setShowOptions(!showOptions)}><BsThreeDotsVertical className='icon' /></button>
                {showOptions ?
                    <DropDown>
                        <ul>
                            <li><button onClick={getBookingDetails}>Booking Details</button></li>
                            <li><button onClick={getBookingEdit}>Edit Booking</button></li>
                            <li><button onClick={eraseBooking}>Delete Booking</button></li>
                        </ul>
                    </DropDown>
                    : null}
            </DataContainerButton>
        </Row>
    );
}

export default GuestRow;
