import React, { useEffect, useState } from 'react';
import RoomTable from '../../components/Rooms/RoomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RoomsContainer } from './RoomsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from '../../components/Blocks/Select';
import { getAllRooms } from '../../actions/actions';

import {
    TableTools,
    FilterTable,
    FilterButton,
    TableButtons
} from '../../components/Blocks/Blocks';

import { ButtonNew } from "../../components/Blocks/LinksStyled";
import LoaderSpinner from '../../components/Blocks/LoaderSpinner';
import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Rooms = () => {

    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => state.roomsReducer);
    const [roomList, setRoomList] = useState(rooms);

    useEffect(() => {
        if (rooms.length === 0) {
            getAllRooms(dispatch);
        }
    }, []);

    useEffect(() => {
        setRoomList(rooms);
    }, [rooms]);

    const showAllRooms = () => {
        setRoomList(rooms);
    }

    const filterByType = (type) => {
        setRoomList(rooms.filter(
            (room) => room.status === type
        ));
    };

    if (roomList) {
        return (
            <RoomsContainer>
                <div className='content'>
                    <TableTools>
                        <FilterTable>
                            <FilterButton onClick={showAllRooms}>All Rooms</FilterButton>
                            <FilterButton onClick={() => filterByType(1)}>Available Rooms</FilterButton>
                            <FilterButton onClick={() => filterByType(0)}>Booked Rooms</FilterButton>
                        </FilterTable>
                        <TableButtons>
                            <ButtonNew>
                                <Link to="/rooms/newroom">+ New Room</Link>
                            </ButtonNew>
                            <Select type="white" options={["Newest"]}></Select>
                        </TableButtons>
                    </TableTools>
                    <DndProvider backend={HTML5Backend}>
                        <RoomTable data={roomList}></RoomTable>
                    </DndProvider>
                    <ToastContainer containerId={"GET_ALL_ROOMS"} enableMultiContainer position='bottom-right' theme='dark' transition={Slide} />
                </div>
            </RoomsContainer>
        );
    } else {
        return (
            <ToastContainer containerId={"GET_ALL_ROOMS"} enableMultiContainer position='bottom-right' theme='dark' transition={Slide} />
        );
    }
}

export default Rooms;
