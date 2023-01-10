import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getBooking } from '../../features/sliceBookings';

const Booking = () => {

    const { booking } = useSelector((state) => state.bookingsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getBooking(params.idbooking));
        console.log(booking);
    }, []);

    return (
        <div>
            <h1>id: {booking._id}</h1>
            <p>name: {booking.name}</p>
            <p>check in: {booking.checkin}</p>
            <p>check out: {booking.checkout}</p>
            <p>room type: {booking.type}</p>
            <p>price: {booking.price}</p>
            <p>description: {booking.description}</p>
            <p>facilities: {booking.amenities}</p>
        </div>
    );
}

export default Booking;
