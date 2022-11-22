import React, { useEffect } from 'react';
import RoomTable from '../../components/Rooms/RoomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RoomsContainer } from './RoomsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getApiRooms } from '../../features/sliceRooms';

const Rooms = () => {

    const dispatch = useDispatch();
    const { rooms } = useSelector((state) => state.sliceRooms);

    useEffect(() => {
        dispatch(getApiRooms);
    }, [dispatch]);

    return (
        <RoomsContainer>
            <div className='content'>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={rooms}></RoomTable>
                </DndProvider>
            </div>
        </RoomsContainer>
    );
}

export default Rooms;
