import React, { useEffect } from 'react';
import RoomTable from '../../components/Rooms/RoomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RoomsContainer } from './RoomsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getApiRooms } from '../../features/sliceRooms';
import { Link } from 'react-router-dom';
import { filterRooms } from '../../features/sliceRooms';

import Button from '../../components/Blocks/Button';
import Select from '../../components/Blocks/Select';

import {
    TableTools,
    FilterTable,
    FilterButton,
    TableButtons
} from '../../components/Blocks/Blocks';

const Rooms = () => {

    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => state.roomsReducer);

    useEffect(() => {
        dispatch(getApiRooms());
    }, [dispatch]);

    const getAllRooms = () => {
        dispatch(getApiRooms());
    }

    const filterByType = (type) => {
        getAllRooms();
        setTimeout(() => {
            dispatch(filterRooms(type));
        }, 0);
    }

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
                        <Link to="/rooms/newroom">Hola</Link>
                        <Button type="create" text="+ New Room">
                        </Button>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={rooms}></RoomTable>
                </DndProvider>
            </div>
        </RoomsContainer>
    );
}

export default Rooms;
