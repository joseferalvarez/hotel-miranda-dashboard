import React from 'react';
import GuestsTable from '../components/guestsTable';
import data from "../db/guest.json"

const Bookings = () => {
    return (
        <div>
            <GuestsTable data={data}></GuestsTable>
        </div>
    );
}

export default Bookings;
