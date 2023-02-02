/**React */
import React from 'react';
/**Component */
import GuestRow from './GuestRow';
/**Styles */
import { Table, HeaderTitle } from '../../Styles/Common/Table';

/**Component */
const GuestsTable = ({ data }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <HeaderTitle>Guest</HeaderTitle>
                    <HeaderTitle>Order Date</HeaderTitle>
                    <HeaderTitle>Check In</HeaderTitle>
                    <HeaderTitle>Check Out</HeaderTitle>
                    <HeaderTitle>Special Request</HeaderTitle>
                    <HeaderTitle>Room Type</HeaderTitle>
                    <HeaderTitle>Status</HeaderTitle>
                </tr>
            </thead>
            <tbody>
                {data.map((obj, index) => (
                    <GuestRow key={index} booking={obj} />
                ))}
            </tbody>
        </Table>
    );
}

export default GuestsTable;
