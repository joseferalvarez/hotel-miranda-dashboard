/** React */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

/** Redux */
import { useDispatch } from 'react-redux';
import { deleteOneRoom } from '../../actions/actionsRoom';

/** Styles */
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    RoomNameContainer,
    RoomId,
    RoomNumber,
    DataContainer,
    DataContainerButton,
    RoomText,
    RoomPrice,
    RoomStatus
} from "../../Styles/Rooms/RoomRow";

import {
    Row,
    DropDown
} from "../../Styles/Common/Row";


/** Component */
const RoomRow = ({ room }) => {

    /** States */
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* Dropdown functions*/
    const eraseRoom = () => {
        deleteOneRoom(dispatch, room._id);
    }
    const getRoomEdit = () => {
        navigate("/rooms/editroom/" + room._id);
    }
    const getRoomDetails = () => {
        navigate("/rooms/" + room._id);
    }

    /** HTML */
    return (
        <Row key={room.id}>
            <td>
                <RoomNameContainer>
                    <img src={room.photos[0]} alt="" />
                    <div>
                        <RoomId>#{room._id}</RoomId>
                        <RoomNumber>{room.numroom}</RoomNumber>
                    </div>
                </RoomNameContainer>
            </td>
            <DataContainer>
                <RoomText>{room.type}</RoomText>
            </DataContainer>
            <DataContainer>
                <RoomText>{room.amenities.map((amenitie, index) => (
                    index < room.amenities.length - 1 ?
                        <span key={index}>{amenitie}, </span> :
                        <span key={index}>{amenitie}</span>
                ))}</RoomText>
            </DataContainer>
            <DataContainer>
                <RoomPrice>${room.price}<span>/night</span></RoomPrice>
            </DataContainer>
            <DataContainer>
                <RoomPrice>${room.offer}<span>/night</span></RoomPrice>
            </DataContainer>
            <td><RoomStatus status={room.status ? "#5AD07A" : "#E23428"}>{room.status ? "Available" : "Booked"}</RoomStatus></td>
            <DataContainerButton>
                <button onClick={() => setShowOptions(!showOptions)}><BsThreeDotsVertical className='icon' /></button>
                {showOptions ?
                    <DropDown>
                        <ul>
                            <li><button onClick={getRoomDetails}>Room Details</button></li>
                            <li><button onClick={getRoomEdit}>Edit Room</button></li>
                            <li><button onClick={eraseRoom}>Delete Room</button></li>
                        </ul>
                    </DropDown>
                    : null}
            </DataContainerButton>
        </Row>
    );
}

export default RoomRow;
