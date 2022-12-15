import React from 'react';
import { useAppSelector } from '../../App/hooks/hooks';
import { IntRoom } from '../../interfaces/Rooms';

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
} from "./RoomStyled"

type TypeRoom = {
    room: IntRoom;
}

const Room = () => {
    const { room } = useAppSelector<TypeRoom>(state => state.roomsReducer);

    return (
        <RoomContainer>
            <DataContainer>
                <StateContainer>
                    <div>
                        <RoomNumber>Room nº{room.number}</RoomNumber>
                        <RoomId>#{room.id}</RoomId>
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
                <img src={room.photo} alt=""></img>
            </PhotoContainer>
        </RoomContainer>
    );
}

export default Room;
