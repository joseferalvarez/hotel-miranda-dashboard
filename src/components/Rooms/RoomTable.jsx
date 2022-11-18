import React, { useCallback, useState } from 'react';
import RoomRow from './RoomRow';
import update from 'immutability-helper';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Button from '../Blocks/Button';
import Select from '../Blocks/Select';

import {
    Table,
    HeaderTitle,
    TableTools,
    FilterTable,
    FilterButton,
    TableButtons
} from '../Blocks/Blocks';

const RoomTable = ({ data }) => {
    const [items, setItems] = useState(data);

    const moveRow = useCallback((dragIndex, hoverIndex) => {
        setItems((prevItems) => update(prevItems, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevItems[dragIndex]],
            ]
        }))
    }, [])

    const renderItem = useCallback((item, index) => {
        return (
            <RoomRow key={item.id} id={item.id} room={item} index={index} moveRow={moveRow}></RoomRow>
        )
    })
    return (
        <div>
            <TableTools>
                <FilterTable>
                    <FilterButton>All Rooms</FilterButton>
                    <FilterButton>Available Rooms</FilterButton>
                    <FilterButton>Booked Rooms</FilterButton>
                </FilterTable>
                <TableButtons>
                    <Button type="create" text="+ New Room"></Button>
                    <Select type="white" options={["Newest"]}></Select>
                </TableButtons>
            </TableTools>
            <Table>
                <thead>
                    <tr>
                        <HeaderTitle>Room Name</HeaderTitle>
                        <HeaderTitle>Room Type</HeaderTitle>
                        <HeaderTitle>Amenities</HeaderTitle>
                        <HeaderTitle>Rate</HeaderTitle>
                        <HeaderTitle>Offer Price</HeaderTitle>
                        <HeaderTitle>Status</HeaderTitle>
                    </tr>
                </thead>
                <tbody>
                    <DndProvider backend={HTML5Backend}>
                        {items.map((obj, index) => (
                            renderItem(obj, index)
                        ))}
                    </DndProvider>
                </tbody>
            </Table>
        </div>
    );
}

export default RoomTable;
