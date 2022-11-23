import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

const getAllUsers = new Promise((data) => {
    setTimeout(() => {
        data(fetchApi("Users"));
    }, 200);
})

export const getApiUsers = createAsyncThunk(
    "list/fetchRooms",
    () => {
        return getAllUsers
            .then((data) => data);
    }
);

const initialState = {
    users: []
}
export const sliceUsers = createSlice({
    name: "users",
    initialState,
    reducers: {
        filterUsers: (state, action) => {
            state.users = state.users.filter(
                (user) => user.state === action.payload
            );
        },
        addNewUser: (state, action) => {
            state.users = [...state, action.payload]
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
        },
        editUser: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user = action.payload;
                }
                return user;
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApiUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        }).addCase(getApiUsers.rejected, () => {
            console.error("No se han podido encontrar usuarios.");
        });
    }

});

export const { filterUsers } = sliceUsers.actions;
export default sliceUsers.reducer;
