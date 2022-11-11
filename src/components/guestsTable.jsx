import React from 'react';
import { Table, HeaderTitle } from './blocks';
import GuestRow from './guestRow';

const GuestsTable = (props) => {
    return (
        <Table>
            <tr>
                <HeaderTitle><input className='checkbox' type="checkbox"></input></HeaderTitle>
                <HeaderTitle>Guest</HeaderTitle>
                <HeaderTitle>Order Date</HeaderTitle>
                <HeaderTitle>Check In</HeaderTitle>
                <HeaderTitle>Check Out</HeaderTitle>
                <HeaderTitle>Special Request</HeaderTitle>
                <HeaderTitle>Room Type</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
            </tr>
            {props.data.map((obj) => (
                <GuestRow guest={obj} />
            ))}
        </Table>
    );
}

export default GuestsTable;
