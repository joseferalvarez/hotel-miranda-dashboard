import React from 'react';
import RoomTable from '../components/roomTable';
import data from "../db/rooms.json";

const Rooms = () => {

    return (
        <div>
            <h1>rooms</h1>
            <div>
                <RoomTable data={data}></RoomTable>
            </div>
        </div>
    );
}

export default Rooms;
