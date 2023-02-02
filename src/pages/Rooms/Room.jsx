/**React */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getOneRoom, resetRoom } from '../../actions/actions';

/**Component */
import PhotoSlider from '../../components/Blocks/PhotoSlider';

/**Styles */
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
    PhotoContainer
} from "../../Styles/Rooms/RoomCard";
import {
    FacilitiesContainer,
    Facilitie
} from "../../Styles/Common/Facilities";

/**Component */
const Room = () => {
    /**States */
    const { room } = useSelector((state) => state.roomsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    /**GET the room from back */
    useEffect(() => {
        if (room) {
            resetRoom(dispatch);
        }
        getOneRoom(dispatch, params.idroom);
    }, []);

    /** HTML */
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
                            <Rate>${(room.price / 100).toFixed(2)}<span>/night</span></Rate>
                        </div>
                        <div>
                            <Subtitle>Offer Price</Subtitle>
                            <Rate>${(((100 - room.offer) * room.price) / 10000).toFixed(2)}<span>/night</span></Rate>
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
                    <PhotoSlider photos={room.photos}></PhotoSlider>
                </PhotoContainer>
            </RoomContainer>
        );
    } else {
        return (
            <></>
        );
    }

}

export default Room;
