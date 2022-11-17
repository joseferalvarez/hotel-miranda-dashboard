import React from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import data from "../../db/guest.json";
import { BookingsContainer } from './BookingsStyled';

const Bookings = () => {
    return (
        <BookingsContainer>
            <div className='content'>
                <GuestsTable data={data}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
