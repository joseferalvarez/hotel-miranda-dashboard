import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneRoom } from '../../actions/actions';

import {
    RoomContainer,
    DataContainer,
    StateContainer,
    PriceContainer,
    Rate,
    Subtitle,
    RoomNumber,
    RoomId,
    RoomState,
    RoomType,
    FacilitiesContainer,
    Facilitie,
    PhotoContainer
} from "./RoomStyled.jsx";

const Room = () => {
    const { room } = useSelector((state) => state.roomsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        getOneRoom(dispatch, params.idroom);
    }, []);

    if (room) {
        return (
            <RoomContainer>
                <DataContainer>
                    <StateContainer>
                        <div>
                            <RoomNumber>Room nº{room.numroom}</RoomNumber>
                            <RoomId>#{room._id}</RoomId>
                            <RoomType>{room.type}</RoomType>
                        </div>
                        <div>
                            <RoomState status={room.status ? "#5AD07A" : "#E23428"}>
                                {room.status ? "Available" : "Booked"}
                            </RoomState>
                        </div>
                    </StateContainer>
                    <hr></hr>
                    <PriceContainer>
                        <div>
                            <Subtitle>Rate</Subtitle>
                            <Rate>${room.price}<span>/night</span></Rate>
                        </div>
                        <div>
                            <Subtitle>Offer Price</Subtitle>
                            <Rate>${room.offer}<span>/night</span></Rate>
                        </div>
                    </PriceContainer>
                    <hr></hr>
                    <Subtitle>Facilities</Subtitle>
                    <FacilitiesContainer>
                        {room.amenities.map((obj, index) => (
                            <Facilitie key={index}>{obj}</Facilitie>
                        ))}
                    </FacilitiesContainer>
                </DataContainer>
                <PhotoContainer>
                    <img src={room.photos[0]} alt=""></img>
                </PhotoContainer>
            </RoomContainer>
        );
    } else {
        return (
            <p>Habitacion no encontrada</p>
        )
    }
}

export default Room;
