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
        filterRooms: (state, action) => {
            state.rooms = state.rooms.filter(
                (room) => room.status === action.payload
            );
        },
        addNewRoom: (state, action) => {
            state.rooms = [...state.rooms, action.payload];
        },
        deleteRoom: (state, action) => {
            state.rooms = state.rooms.filter(
                (room) => room.id !== action.payload
            )
        },
        editRoom: (state, action) => {
            state.rooms = state.rooms.map((room) => {
                if (room.id === action.payload.id) {
                    room = action.payload;
                }
                return room;
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApiRooms.fulfilled, (state, action) => {
            state.rooms = action.payload;
        }).addCase(getApiRooms.rejected, () => {
            console.error("No se han podido encontrar habitaciones.");
        });
    }
});

export const { filterRooms } = sliceRooms.actions;
export default sliceRooms.reducer;
