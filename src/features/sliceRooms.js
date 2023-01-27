import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

/* Return an object with all rooms*/
export const getApiRooms = createAsyncThunk(
    "room/fetchRooms",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`);
    }
);

/* Insert a new room */
export const createNewRoom = createAsyncThunk(
    "room/CreateRoom", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms`, { room: data.room });
    }
);

/* Delete an existing room */
export const deleteRoom = createAsyncThunk(
    "room/DeleteRoom", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${data.id}`);
    }
);

/* Edit an existing room */
export const editRoom = createAsyncThunk(
    "room/EditRoom", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${data.id}`, { room: data.room });
    }
);

/* Get an existing room object */
export const getRoom = createAsyncThunk(
    "room/GetRoomDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/rooms/${data.id}`);
    }
);

/* Initial state when slice load */
const initialState = {
    rooms: [],
    room: null
}

/* Rooms slice */
export const sliceRooms = createSlice({
    name: "rooms",
    initialState,
    reducers: {

        /* Delete the state of a single room */
        resetRoomState: (state, action) => {
            if (state.room) {
                state.room = null;
            }
        }
    },
    extraReducers: (builder) => {

        /* Promise builder of getApiRooms (GET all rooms)*/
        builder.addCase(getApiRooms.fulfilled, (state, action) => {
            state.rooms = action.payload;
            toast.success("Rooms loaded succesfully");
        }).addCase(getApiRooms.rejected, () => {
            toast.error("Rooms not found");
        }).addCase(getApiRooms.pending, () => {
            toast.loading("Looking for rooms...");
        });

        /* Promise builder of createNewRoom (POST a new room) */
        builder.addCase(createNewRoom.fulfilled, (state, action) => {
            const newroom = action.payload.newroom;
            state.rooms = [...state.rooms, newroom];
            toast.success(`Room ${newroom.numroom} created succesfully`);
        }).addCase(createNewRoom.rejected, () => {
            toast.error("There has been an error creating the room");
        }).addCase(createNewRoom.pending, () => {
            toast.loading("Creating the new room...");
        });

        /* Promise builder of deleteRoom (DELETE an existing room)*/
        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            const oldroom = action.payload.oldroom;
            state.rooms = state.rooms.filter(
                (room) => room._id !== oldroom._id
            );
            toast.success(`Room ${oldroom.numroom} deleted succesfully`);
        }).addCase(deleteRoom.rejected, () => {
            toast.error("There has been an error deleting the room");
        }).addCase(deleteRoom.pending, () => {
            toast.loading("Deleting the room...");
        });

        /* Promise builder of editRoom (PUT an existing room)*/
        builder.addCase(editRoom.fulfilled, (state, action) => {
            const newRoom = action.payload.newroom;
            state.rooms = state.rooms.map((room) => {
                return room._id === newRoom._id ? newRoom : room;
            });
            toast.success(`Room ${newRoom.numroom} updated succesfully`);
        }).addCase(editRoom.rejected, () => {
            toast.error("There has been an error updating the room");
        }).addCase(editRoom.pending, () => {
            toast.loading("Updating the room");
        });

        /* Promise builder of getRoom (GET a single room)*/
        builder.addCase(getRoom.fulfilled, (state, action) => {
            const room = action.payload;
            state.room = room;
            toast.success(`Room ${room.numroom} loaded`);
        }).addCase(getRoom.rejected, () => {
            toast.error("There has been an error loading the room");
        }).addCase(getRoom.pending, () => {
            toast.loading("Loading room...");
        });
    }
});

export const {
    resetRoomState
} = sliceRooms.actions;

export default sliceRooms.reducer;
