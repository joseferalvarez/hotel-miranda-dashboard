import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

const getAllRooms = new Promise((data) => {
    setTimeout(() => {
        data(fetchApi("Rooms"));
    }, 200);
})

export const getApiRooms = createAsyncThunk(
    "list/fetchRooms",
    () => {
        return getAllRooms
            .then((data) => data);
    }
);

const initialState = {
    rooms: [],
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

export const { filterRooms, addNewRoom } = sliceRooms.actions;
export default sliceRooms.reducer;
