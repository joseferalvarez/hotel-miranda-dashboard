import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../../features/sliceRooms';
import { useNavigate } from 'react-router';

import {
    Row,
    RoomNameContainer,
    RoomId,
    RoomNumber,
    DataContainer,
    DataContainerButton,
    RoomText,
    RoomPrice,
    RoomStatus,
    DropDown
} from "./RoomRowStyled"



const RoomRow = ({ id, room, index, moveRow }) => {

    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const eraseRoom = () => {
        dispatch(deleteRoom(room._id));
    }

    const getRoomEdit = () => {
        navigate("/rooms/editroom/" + room._id);
    }

    const getRoomDetails = () => {
        navigate("/rooms/" + room._id);
    }

    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: "room",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            //Para que no se reemplace por si mismo
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveRow(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: "room",
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <Row key={room.id} ref={ref} data-handler-id={handlerId} opacity={opacity}>
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
                    <span key={index}>{amenitie}, </span>
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
