import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

/* Return an object with all bookings*/
export const getApiBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings`);
    }
);

/* Insert a new booking */
export const createNewBooking = createAsyncThunk(
    "bookings/CreateBooking", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings`, { booking: data.booking });
    }
);

/* Delete an existing booking */
export const deleteBooking = createAsyncThunk(
    "bookings/DeleteBooking", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings/${data.id}`);
    }
);

/* Edit an existing booking */
export const editBooking = createAsyncThunk(
    "bookings/EditBooking", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings/${data.id}`, { booking: data.booking });
    }
);

/* Get an existing booking object */
export const getBooking = createAsyncThunk(
    "booking/GetBookingDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/bookings/${data.id}`);
    }
);

/* Initial state when slice load */
const initialState = {
    bookings: [],
    booking: null
}

/* Bookings slice */
export const sliceBookings = createSlice({
    name: "bookings",
    initialState,
    extraReducers: (builder) => {

        const TOAST_ID = ["GET_ALL_BOOKINGS", "POST_ONE_BOOKING", "DELETE_ONE_BOOKING", "PUT_ONE_BOOKING", "GET_ONE_BOOKING"];

        /* Promise builder of getApiBookings (GET all bookings)*/
        builder.addCase(getApiBookings.pending, () => {
            toast("Looking for bookings...", { toastId: TOAST_ID[0], autoClose: false, containerId: "GET_ALL_BOOKINGS_TOAST" });
        }).addCase(getApiBookings.fulfilled, (state, action) => {
            state.bookings = action.payload;
            toast.update(TOAST_ID[0], {
                render: "Bookings loaded succesfully",
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getApiBookings.rejected, () => {
            toast.update(TOAST_ID[0], {
                render: "Bookings not found",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of createNewRoom (POST a new booking) */
        builder.addCase(createNewBooking.pending, () => {
            toast("Creating the new booking", { toastId: TOAST_ID[1], autoClose: false });
        }).addCase(createNewBooking.fulfilled, (state, action) => {
            const newBooking = action.payload.newbooking;
            state.bookings = [...state.bookings, newBooking];
            toast.update(TOAST_ID[1], {
                render: `Booking ${newBooking._id} created succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(createNewBooking.rejected, () => {
            toast.update(TOAST_ID[1], {
                render: "There has been an error creating the booking",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of deleteBooking(DELETE an existing booking)*/
        builder.addCase(deleteBooking.pending, () => {
            toast("Deleting the booking...", { toastId: TOAST_ID[2], autoClose: false });
        }).addCase(deleteBooking.fulfilled, (state, action) => {
            const oldbooking = action.payload.oldbooking;
            state.bookings = state.bookings.filter(
                (booking) => booking._id !== oldbooking._id
            );
            toast.update(TOAST_ID[2], {
                render: `Booking ${oldbooking._id} deleted succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(deleteBooking.rejected, () => {
            toast.update(TOAST_ID[2], {
                render: "There has been an error deleting the booking",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of editBooking (PUT an existing booking)*/
        builder.addCase(editBooking.pending, () => {
            toast("Updating the booking...", { toastId: TOAST_ID[3], autoClose: false });
        }).addCase(editBooking.fulfilled, (state, action) => {
            const newBooking = action.payload.newbooking;
            state.bookings = state.rooms.map((booking) => {
                return booking._id === newBooking._id ? newBooking : booking;
            });
            toast.update(TOAST_ID[3], {
                render: `Booking ${newBooking._id} updated succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(editBooking.rejected, () => {
            toast.update(TOAST_ID[3], {
                render: "There has been an error updating the booking",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of getBooking (GET a single booking)*/
        builder.addCase(getBooking.pending, () => {
            toast("Loading booking...", { toastId: TOAST_ID[4], autoClose: false });
        }).addCase(getBooking.fulfilled, (state, action) => {
            const booking = action.payload;
            state.booking = booking;
            toast.update(TOAST_ID[4], {
                render: `Booking ${booking._id} loaded`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getBooking.rejected, () => {
            toast.update(TOAST_ID[4], {
                render: "There has been an error loading the booking",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });
    }
});

export default sliceBookings.reducer;
