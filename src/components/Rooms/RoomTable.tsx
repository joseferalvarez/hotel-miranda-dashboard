import React, { useCallback, useState, useEffect } from 'react';
import RoomRow from './RoomRow';
import update from 'immutability-helper';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


import {
    Table,
    HeaderTitle,
} from '../Blocks/Blocks';
import { IntRoom } from '../../interfaces/Rooms';

type Rooms = {
    data: IntRoom[];
}

const RoomTable = ({ data }: Rooms) => {
    const [items, setItems] = useState<IntRoom[]>(data);

    useEffect(() => {
        setItems(data);
    }, [data]);

    const moveRow = useCallback((dragIndex: number, hoverIndex: number) => {
        setItems((prevItems) => update(prevItems, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevItems[dragIndex]],
            ]
        }))
    }, [])

    const renderItem = useCallback((item: IntRoom, index: number): JSX.Element => {
        return (
            <RoomRow key={item.id} id={item.id} room={item} index={index} moveRow={moveRow}></RoomRow>
        )
    }, null)
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <HeaderTitle>Room Name</HeaderTitle>
                        <HeaderTitle>Bed Type</HeaderTitle>
                        <HeaderTitle>Facilities</HeaderTitle>
                        <HeaderTitle>Rate</HeaderTitle>
                        <HeaderTitle>Offer Price</HeaderTitle>
                        <HeaderTitle>Status</HeaderTitle>
                    </tr>
                </thead>
                <tbody>
                    <DndProvider backend={HTML5Backend}>
                        {items.map((obj: IntRoom, index: number) => (
                            renderItem(obj, index)
                        ))}
                    </DndProvider>
                </tbody>
            </Table>
        </div>
    );
}

export default RoomTable;
