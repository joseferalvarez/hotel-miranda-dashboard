/** React */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/** Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getAllRooms } from '../../actions/actions';
/** Components */
import RoomTable from '../../components/Rooms/RoomTable';

/** Styles */
import {
    TableTools,
    FilterTable,
    FilterButton,
    TableButtons
} from '../../Styles/Common/Table';
import { ButtonNew } from "../../Styles/Common/Button";
import { ViewContainer } from '../../Styles/Common/ViewContainer';

/** Component */
const Rooms = () => {

    /** States */
    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => state.roomsReducer);
    const [roomList, setRoomList] = useState(rooms);

    /** If rooms state is not fetched, GET all the rooms */
    useEffect(() => {
        if (!rooms.length) {
            getAllRooms(dispatch);
        }
    }, []);

    /** When rooms state change, set rooms list with it*/
    useEffect(() => {
        setRoomList(rooms);
    }, [rooms]);

    /** Show all rooms in list*/
    const showAllRooms = () => {
        setRoomList(rooms);
    }

    /** Filter rooms by its status */
    const filterByType = (type) => {
        setRoomList(rooms.filter(
            (room) => room.status === type
        ));
    };

    /** HTML*/
    if (roomList) {
        return (
            <ViewContainer>
                <div>
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
                        </TableButtons>
                    </TableTools>
                    <RoomTable data={roomList}></RoomTable>
                </div>
            </ViewContainer>
        );
    } else {
        return (
            <></>
        );
    }
}

export default Rooms;
