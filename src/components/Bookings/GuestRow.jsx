/**React */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
/**Redux */
import { useDispatch } from 'react-redux';
import { deleteOneBooking } from '../../actions/actionsBooking';
/**Component */
import Button from "../Blocks/Button";
/**Styles */
import {
    GuestContainer,
    GuestName,
    GuestId,
    DataContainer,
    DataContainerButton,
    Status
} from "../../Styles/Bookings/BookingRow";
import {
    Row,
    DropDown
} from "../../Styles/Common/Row.jsx";
import {
    BsThreeDotsVertical
} from "react-icons/bs";

/**Component */
const GuestRow = ({ booking }) => {

    /**States */
    const [showOptions, setShowOptions] = useState(false);
    const [status, setStatus] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /**DELETE the booking */
    const eraseBooking = () => {
        deleteOneBooking(dispatch, booking._id)
    }

    /**Navigate to details booking view */
    const getBookingDetails = () => {
        navigate("/bookings/" + booking._id);
    }

    /**Status style changer */
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
    }, [booking]);

    /**HTML */
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
                            <li><button onClick={eraseBooking}>Delete Booking</button></li>
                        </ul>
                    </DropDown>
                    : null}
            </DataContainerButton>
        </Row>
    );
}

export default GuestRow;
