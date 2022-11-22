import React, { useEffect } from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import { BookingsContainer } from './BookingsStyled';
import { FilterTable, FilterButton, TableTools, TableButtons } from '../../components/Blocks/Blocks';
import Select from '../../components/Blocks/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getApiBookings } from '../../features/sliceBookings';



const Bookings = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.bookingsReducer);

    useEffect(() => {
        dispatch(getApiBookings());
    }, [dispatch, bookings]);

    return (
        <BookingsContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton>All Guest</FilterButton>
                        <FilterButton>Pending</FilterButton>
                        <FilterButton>Booked</FilterButton>
                        <FilterButton>Canceled</FilterButton>
                        <FilterButton>Refund</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Select type="green" options={["1 November 2020 - 30 November 2020"]}></Select>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <GuestsTable data={bookings}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
