import React from 'react';
import RoomRow from './RoomRow';

import { Table, HeaderTitle } from '../../Styles/Common/Table';

const RoomTable = ({ data }) => {
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
                    {data.map((obj, index) => (
                        <RoomRow key={obj._id} room={obj}></RoomRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RoomTable;
