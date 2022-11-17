import React from 'react';
import RoomTable from '../../components/Rooms/RoomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import data from "../../db/rooms.json";
import { RoomsContainer } from './RoomsStyled';

const Rooms = () => {

    return (
        <RoomsContainer>
            <div className='content'>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={data}></RoomTable>
                </DndProvider>
            </div>
        </RoomsContainer>
    );
}

export default Rooms;
