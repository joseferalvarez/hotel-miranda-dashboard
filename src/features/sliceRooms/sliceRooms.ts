import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../fetchApi";

import type { IntRoom } from "../../interfaces/Rooms";

interface RoomState {
    rooms: IntRoom[] | [],
    room: IntRoom | null | undefined;
}

interface IntAction {
    type: string,
    payload: any,
    meta: any
}

export const getApiRooms = createAsyncThunk(
    "room/fetchRooms",
    async () => {
        return await fetchApi("Rooms");
    }
);

export const createNewRoom = createAsyncThunk(
    "room/CreateRoom", async (newRoom: IntRoom) => {
        return await newRoom;
    }
);

export const deleteRoom = createAsyncThunk(
    "room/DeleteRoom", async (idRoom: number) => {
        return await idRoom;
    }
);

export const editRoom = createAsyncThunk(
    "room/EditRoom", async (idRoom: number) => {
        return await idRoom;
    }
);

export const getRoom = createAsyncThunk(
    "room/GetRoomDetails", async (idRoom: number) => {
        return await idRoom;
    }
);

const initialState: RoomState = {
    rooms: [],
    room: null
}

export const sliceRooms = createSlice({
    name: "rooms",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getApiRooms.fulfilled, (state: RoomState, action: IntAction) => {
            state.rooms = action.payload;
        }).addCase(getApiRooms.rejected, () => {
            console.error("No se han podido encontrar habitaciones.");
        });

        builder.addCase(createNewRoom.fulfilled, (state: RoomState, action: IntAction) => {
            state.rooms = [...state.rooms, action.payload];
        });

        builder.addCase(deleteRoom.fulfilled, (state: RoomState, action: IntAction) => {
            state.rooms = state.rooms.filter(
                (room: IntRoom) => room.id !== action.payload
            );
        });

        builder.addCase(editRoom.fulfilled, (state: RoomState, action: IntAction) => {
            state.rooms = state.rooms.map((room: IntRoom) => {
                return room.id === action.payload.id ? action.payload : room;
            });
        });

        builder.addCase(getRoom.fulfilled, (state: RoomState, action: IntAction) => {
            state.room = state.rooms.find((room: IntRoom) => room.id === action.payload);
        });
    }
});

export default sliceRooms.reducer;
