import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { BsThreeDotsVertical } from "react-icons/bs";

import {
    Row,
    RoomNameContainer,
    DataContainer,
    RoomStatus
} from "./RoomRowStyled"



const RoomRow = ({ id, room, index, moveRow }) => {

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
                    {/* <RoomImg src={room.photo} /> */}
                    <img className='room__img' src={room.photo} alt="" />
                    <div className='room__data'>
                        <p className='room__data__id'>#{room.id}</p>
                        <p className='room__data__number'>{room.number}</p>
                    </div>
                </RoomNameContainer>
            </td>
            <DataContainer>
                <p className='data__text'>{room.type}</p>
            </DataContainer>
            <DataContainer>
                <p className='data__text'>{room.amenities.map((amenitie, index) => (
                    <span key={index}>{amenitie}, </span>
                ))}</p>
            </DataContainer>
            <DataContainer>
                <p className='data__price'>${room.price}<span>/night</span></p>
            </DataContainer>
            <DataContainer>
                <p className='data__price'>${room.offer}<span>/night</span></p>
            </DataContainer>
            <td><RoomStatus status={room.status ? "#5AD07A" : "#E23428"}>{room.status ? "Available" : "Booked"}</RoomStatus></td>
            <DataContainer className='data-container__button'>
                <button><BsThreeDotsVertical className='icon' /></button>
            </DataContainer>
        </Row>
    );
}

export default RoomRow;
