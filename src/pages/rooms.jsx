import React from 'react';
import RoomTable from '../components/roomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import data from "../db/rooms.json";

const Rooms = () => {

    return (
        <div>
            <h1>rooms</h1>
            <div>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={data}></RoomTable>
                </DndProvider>
            </div>
        </div>
    );
}

export default Rooms;
