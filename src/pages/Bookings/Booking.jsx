/**React */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getOneBooking, resetBooking } from '../../actions/actionsBooking';
/**Components */
import PhotoSlider from '../../components/Blocks/PhotoSlider';
/**Styles */
import {
    BookingContainer,
    BookingCard,
    Data,
    User,
    DateCheck,
    InfoRoom,
    DescRoom,
    FacilitiesRoom,
    Slider
} from "../../Styles/Bookings/BookingCard"
import {
    FacilitiesContainer,
    Facilitie
} from "../../Styles/Common/Facilities"
import "swiper/css";
import 'swiper/css/navigation';

/**Component */
const Booking = () => {
    /**States */
    const { booking } = useSelector((state) => state.bookingsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    /**GET the booking from the backend */
    useEffect(() => {
        if (booking) {
            resetBooking(dispatch);
        }
        getOneBooking(dispatch, params.idbooking);
    }, []);

    /**Format date from database */
    const formatDate = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const newDate = new Date(date);
        const month = monthNames[newDate.getMonth()];
        const day = newDate.getDay();
        const year = newDate.getFullYear();
        const hours = newDate.getHours();
        const minutes = String(newDate.getMinutes()).length === 2 ? newDate.getMinutes() : `0${newDate.getMinutes()}`;

        return `${month} ${day}th, ${year} | ${hours}:${minutes}`;
    }

    /**HTML */
    if (booking) {
        return (
            <BookingContainer>
                <BookingCard>
                    <Data>
                        <User>
                            <p>{booking.name}</p>
                            <p>ID {booking._id}</p>
                        </User>
                        <DateCheck>
                            <div>
                                <p>Check In</p>
                                <p>{formatDate(booking.checkin)}</p>
                            </div>
                            <div>
                                <p>Check Out</p>
                                <p>{formatDate(booking.checkout)}</p>
                            </div>
                        </DateCheck>
                        <hr />
                        <InfoRoom>
                            <div>
                                <p>Room Info</p>
                                <p>{`${booking.type} - ${booking.numroom}`}</p>
                            </div>
                            <div>
                                <p>Price</p>
                                <p>{`$${booking.price / 100}`}<span>/night</span></p>
                            </div>
                        </InfoRoom>
                        <DescRoom>
                            <p>{booking.request}</p>
                        </DescRoom>
                        <FacilitiesRoom>
                            <p>Facilities</p>
                            <FacilitiesContainer>
                                {booking.amenities.map((obj, index) => (
                                    <Facilitie key={index}>{obj}</Facilitie>
                                ))}
                            </FacilitiesContainer>
                        </FacilitiesRoom>
                    </Data>
                    <Slider>
                        <PhotoSlider photos={booking.photos} text={{ type: booking.type, description: booking.description }}></PhotoSlider>
                    </Slider>
                </BookingCard>
            </BookingContainer>
        );
    } else {
        return (
            <></>
        );
    }
}

export default Booking;
