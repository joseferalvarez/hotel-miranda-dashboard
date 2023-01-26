import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneBooking } from '../../actions/actionsBooking';
import LoaderSpinner from "../../components/Blocks/LoaderSpinner";
import styled from 'styled-components';

import "swiper/css";
import 'swiper/css/navigation';
import PhotoSlider from '../../components/Blocks/PhotoSlider';

const BookingContainer = styled.div`
    padding: 2% 5%;
    display: flex;
    justify-content: center;
`;

const BookingCard = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    width: 100%;

    hr{
        background-color: #EBEBEB;
        border: none;
        height: 2px;
        margin: 5% 10%;
    }
`;

const Data = styled.div`
    width: 50%;
    font-family: var(--font-poppins);
`;

const User = styled.div`
    margin-left: 10%;
    p:first-child{
        font-size: 30px;
        font-weight: 600;
    }
    p:nth-child(2n){
        font-size: 14px;
        color: #799283;
    }
`;

const DateCheck = styled.div`
    margin-left: 10%;
    display: flex;
    gap: 10%;

    p:first-child{
        font-size: 14px;
        color: #6E6E6E;
    }
`;

const InfoRoom = styled.div`
    margin-left: 10%;
    display: flex;
    gap: 10%;

    p:first-child, span{
        font-size: 14px;
        color: #6E6E6E;
    }

    p:last-child{
        font-size: 20px;
    }
`;

const DescRoom = styled.div`
    margin-left: 10%;
    font-size: 14px;
`;
const FacilitiesRoom = styled.div`
    margin: 7% 0 0 10%;

    p:first-child{
        font-size: 14px;
        color: #6E6E6E;
    }
`;

const FacilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Facilitie = styled.p`
    font-family: var(--font-poppins);
    color: #135846;
    background-color: #EBF1EF;
    padding: 14px 40px;
    border-radius: 12px;
`;

const Slider = styled.div`
    width: 50%;
`;


const Booking = () => {

    const { booking } = useSelector((state) => state.bookingsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        getOneBooking(dispatch, params.idbooking);
    }, []);

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
            <LoaderSpinner></LoaderSpinner>
        );
    }
}

export default Booking;
