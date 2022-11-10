import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd'
import { BsThreeDotsVertical } from "react-icons/bs";

const Row = styled.tr`
    opacity: ${props => props.opacity || 1};
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
`;

const RoomNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

const RoomId = styled.p`
    color: #799283;
    font-size: 14px;
    font-family: var(--font-poppins);
    user-select: none;
`;

const RoomNumber = styled.p`
    font-family: var(--font-poppins);
    font-weight: 500;
    color: #393939;
    font-size: 16px;
    user-select: none;
`;

const RoomText = styled.p`
    font-family: var(--font-poppins);
    font-weight: 500;
    color: #393939;
    font-size: 16px;
    max-width: 300px;
    padding-left: 30px;
    user-select: none;
`;

const RoomPrice = styled.p`
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #212121;
    font-size: 16px;
    max-width: 300px;
    padding-left: 30px;
    user-select: none;
`;

const RoomPriceSpan = styled.span`
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #799283;
    font-size: 14px;
    user-select: none;
`;

const RoomImg = styled.img`
    border-radius: 8px;
    width: 150px;
    height: 77px;
    object-fit: cover;
    user-select: none;
`;

const RoomNameData = styled.div`
    text-align: center;
`;

const RoomStatus = styled.p`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
    user-select: none;
`;

const DataContainer = styled.td`
    vertical-align: bottom;
`;
const DataContainerButton = styled.td`
    vertical-align: top;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 60px;
    margin-top: 15px;
`;

const RowRoom = ({ id, room, index, moveRow }) => {

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
                    <RoomImg src={room.photo} />
                    <RoomNameData>
                        <RoomId>#{room.id}</RoomId>
                        <RoomNumber>{room.number}</RoomNumber>
                    </RoomNameData>
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
                <RoomPrice>${room.price}<RoomPriceSpan>/night</RoomPriceSpan></RoomPrice>
            </DataContainer>
            <DataContainer>
                <RoomPrice>${room.offer}<RoomPriceSpan>/night</RoomPriceSpan></RoomPrice>
            </DataContainer>
            <td><RoomStatus status={room.status ? "#5AD07A" : "#E23428"}>{room.status ? "Available" : "Booked"}</RoomStatus></td>
            <DataContainerButton>
                <Button><BsThreeDotsVertical /></Button>
            </DataContainerButton>
        </Row >
    );
}

export default RowRoom;
