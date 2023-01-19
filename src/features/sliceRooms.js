import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

export const getApiRooms = createAsyncThunk(
    "room/fetchRooms",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`);
    }
);

export const createNewRoom = createAsyncThunk(
    "room/CreateRoom", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`, { room: data.room });
    }
);

export const deleteRoom = createAsyncThunk(
    "room/DeleteRoom", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${data.id}`);
    }
);

export const editRoom = createAsyncThunk(
    "room/EditRoom", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${data.id}`, { room: data.room });
    }
);

export const getRoom = createAsyncThunk(
    "room/GetRoomDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${data.id}`);
    }
);

const initialState = {
    rooms: [],
    room: null
}
export const sliceRooms = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        resetRoomState: (state, action) => {
            if (state.room) {
                state.room = null;
            }
        }
    },
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
            const newRoom = action.payload.newroom;

            state.rooms = state.rooms.map((room) => {
                return room._id === newRoom._id ? newRoom : room;
            });
        });

        builder.addCase(getRoom.fulfilled, (state, action) => {
            const room = action.payload;
            state.room = room;
        });
    }
});

export const {
    resetRoomState
} = sliceRooms.actions;

export default sliceRooms.reducer;
