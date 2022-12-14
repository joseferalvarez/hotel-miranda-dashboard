import React, { useEffect, useState } from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import { BookingsContainer } from './BookingsStyled';
import { FilterTable, FilterButton, TableTools, TableButtons } from '../../components/Blocks/Blocks';
import Select from '../../components/Blocks/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getApiBookings } from '../../features/sliceBookings/sliceBookings';



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
            (booking) => booking.state === type
        ));
    }

    return (
        <BookingsContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton onClick={getAllBookings}>All Bookings</FilterButton>
                        <FilterButton onClick={() => filterByType("Check In")}>Checking In</FilterButton>
                        <FilterButton onClick={() => filterByType("Check Out")}>Checking Out</FilterButton>
                        <FilterButton onClick={() => filterByType("In Progress")}>In Progress</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Select type="green" options={["1 November 2020 - 30 November 2020"]}></Select>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <GuestsTable data={bookingList}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
