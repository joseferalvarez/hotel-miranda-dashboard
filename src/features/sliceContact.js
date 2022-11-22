import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

/*Estado inicial del reducer*/
export const getApiContact = createAsyncThunk(
    "list/fetchBookings",
    async () => {
        return await fetchApi("Bookings");
    }
);

const initialState = {
    contact: []
}
export const sliceContact = createSlice({
    name: "contact",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getApiContact.fulfilled, (state, action) => {
            state.bookings = action.payload;
        }).addCase(getApiContact.rejected, () => {
            console.error("No se han podido encontrar reservas.");
        });
    }
});

/* export const { } = sliceContact.actions; */
export default sliceContact.reducer;
