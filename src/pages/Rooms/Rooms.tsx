import React, { useEffect, useState } from 'react';
import RoomTable from '../../components/Rooms/RoomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RoomsContainer } from './RoomsStyled';
import { getApiRooms } from "../../features/sliceRooms/sliceRooms"
import { Link } from 'react-router-dom';
import Select from '../../components/Blocks/Select';

import {
    TableTools,
    FilterTable,
    FilterButton,
    TableButtons
} from '../../components/Blocks/Blocks';

import { ButtonNew } from "../../components/Blocks/LinksStyled";
import { useAppDispatch, useAppSelector } from '../../App/hooks/hooks';
import { IntRoom } from '../../interfaces/Rooms';

type Room = {
    rooms: IntRoom[];
}

const Rooms = () => {

    const dispatch = useAppDispatch();
    const { rooms } = useAppSelector<Room>(state => state.roomsReducer);
    const [roomList, setRoomList] = useState<IntRoom[]>(rooms);

    useEffect(() => {
        if (rooms.length === 0) {
            dispatch(getApiRooms());
        }
        setRoomList(rooms);
    }, [rooms, dispatch]);

    const getAllRooms = (): void => {
        setRoomList(rooms);
    }

    const filterByType = (type: boolean) => {
        setRoomList(rooms.filter(
            (room: IntRoom) => room.status === type
        ));
    };

    return (
        <RoomsContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton onClick={getAllRooms}>All Rooms</FilterButton>
                        <FilterButton onClick={() => filterByType(true)}>Available Rooms</FilterButton>
                        <FilterButton onClick={() => filterByType(false)}>Booked Rooms</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <ButtonNew>
                            <Link to="/rooms/newroom">+ New Room</Link>
                        </ButtonNew>
                        <Select typeSelect="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={roomList}></RoomTable>
                </DndProvider>
            </div>
        </RoomsContainer>
    );
}

export default Rooms;
