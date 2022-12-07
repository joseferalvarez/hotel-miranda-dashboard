import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

export const getApiBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await fetchApi("Bookings");
    }
);

export const createNewBooking = createAsyncThunk(
    "bookings/CreateBooking", async (newBooking) => {
        return await newBooking;
    }
);

export const deleteBooking = createAsyncThunk(
    "bookings/DeleteBooking", async (idBooking) => {
        return await idBooking;
    }
);

export const editBooking = createAsyncThunk(
    "bookings/EditBooking", async (idBooking) => {
        return await idBooking;
    }
);

export const getBooking = createAsyncThunk(
    "booking/GetBookingDetails", async (idBooking) => {
        return await idBooking;
    }
);

const initialState = {
    bookings: [],
    booking: null
}
export const sliceBookings = createSlice({
    name: "bookings",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getApiBookings.fulfilled, (state, action) => {
            state.bookings = action.payload;
        }).addCase(getApiBookings.rejected, () => {
            console.error("No se han podido encontrar reservas.");
        });

        builder.addCase(createNewBooking.fulfilled, (state, action) => {
            state.bookings = [...state.bookings, action.payload];
        });

        builder.addCase(deleteBooking.fulfilled, (state, action) => {
            state.bookings = state.bookings.filter(
                (booking) => booking.id !== action.payload
            );
        });

        builder.addCase(editBooking.fulfilled, (state, action) => {
            state.bookings = state.rooms.map((booking) => {
                return booking.id === action.payload.id ? action.payload : booking;
            });
        });

        builder.addCase(getBooking.fulfilled, (state, action) => {
            state.booking = state.bookings.find((booking) => booking.id === action.payload);
        });
    }
});

export default sliceBookings.reducer;
