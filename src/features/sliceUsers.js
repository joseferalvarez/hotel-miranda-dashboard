import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

/*Estado inicial del reducer*/
export const getApiUsers = createAsyncThunk(
    "list/fetchusers",
    async () => {
        return await fetchApi("Users");
    }
);

const initialState = {
    users: []
}
export const sliceUsers = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getApiUsers.fulfilled, (state, action) => {
            state.bookings = action.payload;
        }).addCase(getApiUsers.rejected, () => {
            console.error("No se han podido encontrar usuarios.");
        });
    }

});

/* export const { } = sliceUsers.actions; */
export default sliceUsers.reducer;
