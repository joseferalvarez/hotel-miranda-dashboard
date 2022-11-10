import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import RowRoom from './rowRoom';
import update from 'immutability-helper';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Table = styled.table`
    border-collapse: collapse;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const HeaderTitle = styled.th`
    font-family: var(--font-poppins);
    font-weight: 600;
    text-align: start;
    padding: 20px 0 20px 30px;
`;

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
            <RowRoom key={item.id} id={item.id} room={item} index={index} moveRow={moveRow}></RowRoom>
        )
    })
    return (
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
    );
}

export default RoomTable;
