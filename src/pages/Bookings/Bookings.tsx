import React, { useEffect, useState } from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import { BookingsContainer } from './BookingsStyled';
import { FilterTable, FilterButton, TableTools, TableButtons } from '../../components/Blocks/Blocks';
import Select from '../../components/Blocks/Select';
import { getApiBookings } from '../../features/sliceBookings/sliceBookings';
import { useAppDispatch, useAppSelector } from '../../App/hooks/hooks';
import { IntBooking } from '../../interfaces/Booking';

type TypeBookings = {
    bookings: IntBooking[];
}

const Bookings = () => {
    const dispatch = useAppDispatch();
    const { bookings } = useAppSelector<TypeBookings>((state => state.bookingsReducer));
    const [bookingList, setBookingList] = useState<IntBooking[]>(bookings);

    useEffect(() => {
        if (bookings.length === 0) {
            dispatch(getApiBookings());
        }
        setBookingList(bookings);
    }, [bookings, dispatch]);

    const getAllBookings = (): void => {
        setBookingList(bookings);
    }

    const filterByType = (type: string): void => {
        setBookingList(bookings.filter(
            booking => booking.state === type
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
                        <Select typeSelect="green" options={["1 November 2020 - 30 November 2020"]}></Select>
                        <Select typeSelect="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <GuestsTable data={bookingList}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
