import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd'
import { BsThreeDotsVertical } from "react-icons/bs";

const Row = styled.tr`
    opacity: ${props => props.opacity || 1};
    border-top: 1px solid #D4D4D4;

    .room__data__id,
    .data__price span
    {
        color: #799283;
    }

    .room__data__number,
    .data__text{
        color: #393939;
    }
`;

const RoomNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    padding-left: 30px;

    .room{
        &__img{
            border-radius: 8px;
            width: 150px;
            height: 77px;
            object-fit: cover;
        }

        &__data{
            text-align: center;

            &__id{
                font-size: 14px;
                font-family: var(--font-poppins);
            }

            &__number{
                font-family: var(--font-poppins);
                font-weight: 500;
            }
        }
    }
`;

const DataContainer = styled.td`
    vertical-align: bottom;

    &~.data-container__button{
        vertical-align: top;
        padding-right: 30px;
    }

    .data{
        &__text,
        &__price{
            font-family: var(--font-poppins);
            padding-left: 30px;
            max-width: 300px;
        }

        &__text{
            font-weight: 500;
        }

        &__price{
            font-weight: 600;
            color: #212121;
            span{
                font-size: 14px;
            }
        }
    }

    button{
        background-color: transparent;
        border: none;
        margin-left: 60px;
        margin-top: 15px;

        .icon{
            width: 25px;
            height: 25px;
        }
    }
`;


const RoomStatus = styled.p`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

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
        </Row >
    );
}

export default RoomRow;
