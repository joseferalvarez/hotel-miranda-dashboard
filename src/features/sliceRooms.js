import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

const token = JSON.parse(localStorage.getItem("auth")).token;

export const getApiRooms = createAsyncThunk(
    "room/fetchRooms",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`, token);
    }
);

export const createNewRoom = createAsyncThunk(
    "room/CreateRoom", async (newRoom) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`, token, { room: newRoom });
    }
);

export const deleteRoom = createAsyncThunk(
    "room/DeleteRoom", async (idRoom) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${idRoom}`, token);
    }
);

export const editRoom = createAsyncThunk(
    "room/EditRoom", async (idRoom, newRoom) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${idRoom}`, token, { room: newRoom });
    }
);

export const getRoom = createAsyncThunk(
    "room/GetRoomDetails", async (idRoom) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${idRoom}`, token);
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
            const newroom = action.payload.newroom;

            state.rooms = [...state.rooms, newroom];
        });

        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            const oldroom = action.payload.oldroom;

            state.rooms = state.rooms.filter(
                (room) => room._id !== oldroom._id
            );
        });

        builder.addCase(editRoom.fulfilled, (state, action) => {
            state.rooms = state.rooms.map((room) => {
                return room._id === action.payload._id ? action.payload : room;
            });
        });

        builder.addCase(getRoom.fulfilled, (state, action) => {
            const room = action.payload;
            state.room = room;
        });
    }
});

export default sliceRooms.reducer;
