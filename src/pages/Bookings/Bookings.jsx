/**React */
import React, { useEffect, useState } from 'react';
/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getApiBookings } from '../../features/sliceBookings';
/**Components */
import GuestsTable from '../../components/Bookings/GuestsTable';
/**Styles */
import { ViewContainer } from '../../Styles/Common/ViewContainer';
import { FilterTable, FilterButton, TableTools } from '../../Styles/Common/Table';

/**Component */
const Bookings = () => {
    /**States */
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.bookingsReducer);
    const [bookingList, setBookingList] = useState(bookings);

    /**GET the bookings from backend */
    useEffect(() => {
        if (!bookings.length) {
            dispatch(getApiBookings());
        }
        setBookingList(bookings);
    }, []);

    /**Set state with all bookings */
    const getAllBookings = () => {
        setBookingList(bookings);
    }

    /**Filter bookings by status */
    const filterByType = (type) => {
        setBookingList(bookings.filter(
            (booking) => booking.status === type
        ));
    }

    /**HTML */
    return (
        <ViewContainer>
            <div>
                <TableTools>
                    <FilterTable>
                        <FilterButton onClick={getAllBookings}>All Bookings</FilterButton>
                        <FilterButton onClick={() => filterByType(1)}>Checking In</FilterButton>
                        <FilterButton onClick={() => filterByType(0)}>Checking Out</FilterButton>
                        <FilterButton onClick={() => filterByType(2)}>In Progress</FilterButton>
                    </FilterTable>
                </TableTools>
                <GuestsTable data={bookingList}></GuestsTable>
            </div>
        </ViewContainer>
    );
}

export default Bookings;
