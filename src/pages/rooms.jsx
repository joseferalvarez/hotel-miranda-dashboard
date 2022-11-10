import React from 'react';
import RoomTable from '../components/roomTable';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import data from "../db/rooms.json";
import Topbar from '../components/topbar';
import styled from 'styled-components';


const RoomsContainer = styled.div`
    width: 100%;

    .content{
        padding: 50px 5%;
    }
`;

const Rooms = () => {

    return (
        <RoomsContainer>
            <Topbar title="Rooms"></Topbar>
            <div className='content'>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable data={data}></RoomTable>
                </DndProvider>
            </div>
        </RoomsContainer>
    );
}

export default Rooms;
