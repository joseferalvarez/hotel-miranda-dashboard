import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../fetchApi";

import type { IntBooking } from "../../interfaces/Booking";

interface BookingState {
    bookings: IntBooking[] | [],
    booking: IntBooking | null | undefined;
}

interface IntAction {
    type: string,
    payload: any,
    meta: any
}

export const getApiBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await fetchApi("Bookings");
    }
);

export const createNewBooking = createAsyncThunk(
    "bookings/CreateBooking", async (newBooking: IntBooking) => {
        return await newBooking;
    }
);

export const deleteBooking = createAsyncThunk(
    "bookings/DeleteBooking", async (idBooking: number) => {
        return await idBooking;
    }
);

export const editBooking = createAsyncThunk(
    "bookings/EditBooking", async (idBooking: number) => {
        return await idBooking;
    }
);

export const getBooking = createAsyncThunk(
    "booking/GetBookingDetails", async (idBooking: number) => {
        return await idBooking;
    }
);

const initialState: BookingState = {
    bookings: [],
    booking: null
}
export const sliceBookings = createSlice({
    name: "bookings",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getApiBookings.fulfilled, (state: BookingState, action: IntAction) => {
            state.bookings = action.payload;
        }).addCase(getApiBookings.rejected, () => {
            console.error("No se han podido encontrar reservas.");
        });

        builder.addCase(createNewBooking.fulfilled, (state: BookingState, action: IntAction) => {
            state.bookings = [...state.bookings, action.payload];
        });

        builder.addCase(deleteBooking.fulfilled, (state: BookingState, action: IntAction) => {
            state.bookings = state.bookings.filter(
                (booking: IntBooking) => booking.id !== action.payload
            );
        });

        builder.addCase(editBooking.fulfilled, (state: BookingState, action: IntAction) => {
            state.bookings = state.bookings.map((booking: IntBooking) => {
                return booking.id === action.payload.id ? action.payload : booking;
            });
        });

        builder.addCase(getBooking.fulfilled, (state: BookingState, action: IntAction) => {
            state.booking = state.bookings.find((booking: IntBooking) => booking.id === action.payload);
        });
    }
});

export default sliceBookings.reducer;
