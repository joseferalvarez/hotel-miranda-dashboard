import React, { useEffect, useState } from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import { BookingsContainer } from './BookingsStyled';
import { FilterTable, FilterButton, TableTools, TableButtons } from '../../components/Blocks/Blocks';
import Select from '../../components/Blocks/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getApiBookings } from '../../features/sliceBookings';



const Bookings = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.bookingsReducer);
    const [bookingList, setBookingList] = useState(bookings);

    useEffect(() => {
        if (bookings.length === 0) {
            dispatch(getApiBookings());
        }
        setBookingList(bookings);
    }, [bookings, dispatch]);

    const getAllBookings = () => {
        setBookingList(bookings);
    }

    const filterByType = (type) => {
        setBookingList(bookings.filter(
            (booking) => booking.status === type
        ));
    }

    return (
        <BookingsContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton onClick={getAllBookings}>All Bookings</FilterButton>
                        <FilterButton onClick={() => filterByType(1)}>Checking In</FilterButton>
                        <FilterButton onClick={() => filterByType(0)}>Checking Out</FilterButton>
                        <FilterButton onClick={() => filterByType(2)}>In Progress</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <GuestsTable data={bookingList}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
