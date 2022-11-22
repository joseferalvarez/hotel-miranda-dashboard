import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

export const getApiRooms = createAsyncThunk(
    "list/fetchRooms",
    async () => {
        return await fetchApi("Rooms");
    }
);

const initialState = {
    rooms: []
}
export const sliceRooms = createSlice({
    name: "rooms",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getApiRooms.fulfilled, (state, action) => {
            state.rooms = action.payload;
        }).addCase(getApiRooms.rejected, () => {
            console.error("No se han podido encontrar habitaciones.");
        });
    }
});

/* export const { } = sliceRooms.actions; */
export default sliceRooms.reducer;
