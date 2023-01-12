import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

export const getApiBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        const token = JSON.parse(localStorage.getItem("auth")).token;

        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings`, token);
    }
);

export const createNewBooking = createAsyncThunk(
    "bookings/CreateBooking", async (data) => {
        const token = JSON.parse(localStorage.getItem("auth")).token;

        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings`, token, { booking: data.booking });
    }
);

export const deleteBooking = createAsyncThunk(
    "bookings/DeleteBooking", async (data) => {
        const token = JSON.parse(localStorage.getItem("auth")).token;

        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings/${data.id}`, token);
    }
);

export const editBooking = createAsyncThunk(
    "bookings/EditBooking", async (data) => {
        const token = JSON.parse(localStorage.getItem("auth")).token;

        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings/${data.id}`, token, { booking: data.booking });
    }
);

export const getBooking = createAsyncThunk(
    "booking/GetBookingDetails", async (data) => {
        const token = JSON.parse(localStorage.getItem("auth")).token;

        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings/${data.id}`, token);
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
            const newBooking = action.payload.newbooking;

            state.bookings = [...state.bookings, newBooking];
        });

        builder.addCase(deleteBooking.fulfilled, (state, action) => {
            const oldbooking = action.payload.oldbooking;

            state.bookings = state.bookings.filter(
                (booking) => booking._id !== oldbooking._id
            );
        });

        builder.addCase(editBooking.fulfilled, (state, action) => {
            const newBooking = action.payload.newbooking;

            state.bookings = state.rooms.map((booking) => {
                return booking._id === newBooking._id ? newBooking : booking;
            });
        });

        builder.addCase(getBooking.fulfilled, (state, action) => {
            const booking = action.payload;
            state.booking = booking;
        });
    }
});

export default sliceBookings.reducer;
