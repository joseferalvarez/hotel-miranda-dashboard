import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

const getAllBookings = new Promise((data) => {
    setTimeout(() => {
        data(fetchApi("Bookings"));
    }, 200);
})

export const getApiBookings = createAsyncThunk(
    "list/fetchRooms",
    () => {
        return getAllBookings
            .then((data) => data);
    }
);

const initialState = {
    bookings: []
}
export const sliceBookings = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        filterBookings: (state, action) => {
            state.bookings = state.bookings.filter(
                (booking) => booking.state === action.payload
            );
        },
        addNewBooking: (state, action) => {
            state.bookings = [...state.bookings, action.payload];
        },
        deleteBooking: (state, action) => {
            state.bookings = state.bookings.filter(
                (booking) => booking.id !== action.payload
            );
        },
        editBooking: (state, action) => {
            state.bookings = state.bookings.map((booking) => {
                if (booking.id === action.payload.id) {
                    booking = action.payload;
                }
                return booking;
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApiBookings.fulfilled, (state, action) => {
            state.bookings = action.payload;
        }).addCase(getApiBookings.rejected, () => {
            console.error("No se han podido encontrar reservas.");
        });
    }
});

export const { filterBookings } = sliceBookings.actions;
export default sliceBookings.reducer;
