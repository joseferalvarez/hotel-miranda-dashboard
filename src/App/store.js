import { configureStore } from '@reduxjs/toolkit';
import sliceBookings from "../features/sliceBookings";
import sliceContact from "../features/sliceContact";
import sliceRooms from "../features/sliceRooms";
import sliceUsers from '../features/sliceUsers';

export const store = configureStore({
    reducer: {
        bookingsReducer: sliceBookings,
        contactReducer: sliceContact,
        roomsReducer: sliceRooms,
        usersReducer: sliceUsers
    },
});
