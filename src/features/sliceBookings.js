import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

export const getApiBookings = createAsyncThunk(
    "list/fetchBookings",
    async () => {
        return await fetchApi("Bookings");
    }
);

const initialState = {
    bookings: []
}
export const sliceBookings = createSlice({
    name: "bookings",
    initialState,
    reducers: {
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

/* export const { } = sliceBookings.actions; */
export default sliceBookings.reducer;
