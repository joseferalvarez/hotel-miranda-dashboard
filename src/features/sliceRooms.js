import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

export const getApiRooms = createAsyncThunk(
    "room/fetchRooms",
    async () => {
        const token = JSON.parse(localStorage.getItem("auth")).token;
        console.log(token);
        return await fetchApi(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`, token);
    }
);

export const createNewRoom = createAsyncThunk(
    "room/CreateRoom", async (newRoom) => {
        return await newRoom;
    }
);

export const deleteRoom = createAsyncThunk(
    "room/DeleteRoom", async (idRoom) => {
        return await idRoom;
    }
);

export const editRoom = createAsyncThunk(
    "room/EditRoom", async (idRoom) => {
        return await idRoom;
    }
);

export const getRoom = createAsyncThunk(
    "room/GetRoomDetails", async (idRoom) => {
        return await idRoom;
    }
);

const initialState = {
    rooms: [],
    room: null
}
export const sliceRooms = createSlice({
    name: "rooms",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getApiRooms.fulfilled, (state, action) => {
            state.rooms = action.payload;
        }).addCase(getApiRooms.rejected, () => {
            console.error("No se han podido encontrar habitaciones.");
        });

        builder.addCase(createNewRoom.fulfilled, (state, action) => {
            state.rooms = [...state.rooms, action.payload];
        });

        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.filter(
                (room) => room.id !== action.payload
            );
        });

        builder.addCase(editRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.map((room) => {
                return room.id === action.payload.id ? action.payload : room;
            });
        });

        builder.addCase(getRoom.fulfilled, (state, action) => {
            state.room = state.rooms.find((room) => room.id === action.payload);
        });
    }
});

export default sliceRooms.reducer;
