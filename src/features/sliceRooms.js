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

        const TOAST_ID = ["GET_ALL_ROOMS", "POST_ONE_ROOM", "DELETE_ONE_ROOM", "PUT_ONE_ROOM", "GET_ONE_ROOM"];

        /* Promise builder of getApiRooms (GET all rooms)*/
        builder.addCase(getApiRooms.pending, () => {
            toast("Looking for rooms...", { toastId: TOAST_ID[0], autoClose: false });
        }).addCase(getApiRooms.fulfilled, (state, action) => {
            state.rooms = action.payload;
            toast.update(TOAST_ID[0], {
                render: "Rooms loaded succesfully",
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getApiRooms.rejected, () => {
            toast.update(TOAST_ID[0], {
                render: "Rooms not found",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of createNewRoom (POST a new room) */
        builder.addCase(createNewRoom.pending, () => {
            toast("Creating the new room...", { toastId: TOAST_ID[1], autoClose: false });
        }).addCase(createNewRoom.fulfilled, (state, action) => {
            const newroom = action.payload.newroom;
            state.rooms = [...state.rooms, newroom];
            toast.update(TOAST_ID[1], {
                render: `Room ${newroom.numroom} created succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(createNewRoom.rejected, () => {
            toast.update(TOAST_ID[1], {
                render: "There has been an error creating the room",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of deleteRoom (DELETE an existing room)*/
        builder.addCase(deleteRoom.pending, () => {
            toast("Deleting the room...", { toastId: TOAST_ID[2], autoClose: false });
        }).addCase(deleteRoom.fulfilled, (state, action) => {
            const oldroom = action.payload.oldroom;
            state.rooms = state.rooms.filter(
                (room) => room._id !== oldroom._id
            );
            toast.update(TOAST_ID[2], {
                render: `Room ${oldroom.numroom} deleted succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(deleteRoom.rejected, () => {
            toast.update(TOAST_ID[2], {
                render: "There has been an error deleting the room",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of editRoom (PUT an existing room)*/
        builder.addCase(editRoom.pending, () => {
            toast("Updating the room...", { toastId: TOAST_ID[3], autoClose: false });
        }).addCase(editRoom.fulfilled, (state, action) => {
            const newRoom = action.payload.newroom;
            state.rooms = state.rooms.map((room) => {
                return room._id === newRoom._id ? newRoom : room;
            });
            toast.update(TOAST_ID[3], {
                render: `Room ${newRoom.numroom} updated succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(editRoom.rejected, () => {
            toast.update(TOAST_ID[3], {
                render: "There has been an error updating the room",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of getRoom (GET a single room)*/
        builder.addCase(getRoom.pending, () => {
            toast("Loading room...", { toastId: TOAST_ID[4], autoClose: false });
        }).addCase(getRoom.fulfilled, (state, action) => {
            const room = action.payload;
            state.room = room;
            toast.update(TOAST_ID[4], {
                render: `Room ${room.numroom} loaded`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getRoom.rejected, () => {
            toast.update(TOAST_ID[4], {
                render: "There has been an error loading the room",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });
    }
});

export const {
    resetRoomState
} = sliceRooms.actions;

export default sliceRooms.reducer;
