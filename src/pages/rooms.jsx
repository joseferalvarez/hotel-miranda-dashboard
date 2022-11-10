import React from 'react';
import RoomTable from '../components/roomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import data from "../db/rooms.json";
import Topbar from '../components/topbar';

const Rooms = () => {

    return (
        <div>
            <Topbar title="Rooms"></Topbar>
            <div>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={data}></RoomTable>
                </DndProvider>
            </div>
        </div>
    );
}

export default Rooms;
