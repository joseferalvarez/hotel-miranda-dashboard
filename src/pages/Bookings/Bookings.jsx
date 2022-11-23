import React, { useEffect } from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import { BookingsContainer } from './BookingsStyled';
import { FilterTable, FilterButton, TableTools, TableButtons } from '../../components/Blocks/Blocks';
import Select from '../../components/Blocks/Select';
import { useDispatch, useSelector } from 'react-redux';
import { filterBookings, getApiBookings } from '../../features/sliceBookings';



const Bookings = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.bookingsReducer);

    useEffect(() => {
        dispatch(getApiBookings());
    }, [dispatch]);

    const getAllBookings = () => {
        dispatch(getApiBookings());
    }

    const filterByType = (type) => {
        getAllBookings();
        setTimeout(() => {
            dispatch(filterBookings(type))
        }
            , 0);

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
                <GuestsTable data={bookings}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
