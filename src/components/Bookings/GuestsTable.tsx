import React from 'react';
import { Table, HeaderTitle } from '../Blocks/Blocks';
import GuestRow from './GuestRow';
import { Checkbox } from '../Blocks/Blocks';
import { IntBooking } from '../../interfaces/Booking';

type Bookings = {
    data: IntBooking[];
}

const GuestsTable = ({ data }: Bookings) => {
    return (
        <Table>
            <thead>
                <tr>
                    <HeaderTitle>
                        <Checkbox>
                            <input type="checkbox" className="checkbox-input" id="checkbox" />
                            <label>
                                <span className="checkbox">
                                </span>
                            </label>
                        </Checkbox>
                    </HeaderTitle>
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
                {data.map((obj: IntBooking, index: number) => (
                    <GuestRow key={index} guest={obj} />
                ))}
            </tbody>
        </Table>
    );
}

export default GuestsTable;
