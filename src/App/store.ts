import { configureStore } from '@reduxjs/toolkit';
import sliceBookings from "../features/sliceBookings/sliceBookings";
import sliceContact from "../features/sliceContact/sliceContact";
import sliceRooms from "../features/sliceRooms/sliceRooms";
import sliceUsers from '../features/sliceUsers/sliceUsers';

export const store = configureStore({
    reducer: {
        bookingsReducer: sliceBookings,
        contactReducer: sliceContact,
        roomsReducer: sliceRooms,
        usersReducer: sliceUsers
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
