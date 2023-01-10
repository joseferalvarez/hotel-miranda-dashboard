import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchGET,
    fetchPOST,
    fetchDELETE,
    fetchPUT
} from "./fetchApi";

const token = JSON.parse(localStorage.getItem("auth")).token;

export const getApiUsers = createAsyncThunk(
    "users/fetchUser",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`, token);
    }
);

export const createNewUser = createAsyncThunk(
    "user/CreateUser", async (newUser) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`, token, { user: newUser });
    }
);

export const deleteUser = createAsyncThunk(
    "user/DeleteUser", async (idUser) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${idUser}`, token);
    }
);

export const editUser = createAsyncThunk(
    "user/EditUser", async (idUser, newUser) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${idUser}`, token, { room: newUser });
    }
);

export const getUser = createAsyncThunk(
    "user/GetUserDetails", async (idUser) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${idUser}`, token);
    }
);

const initialState = {
    users: [],
    user: null
}
export const sliceUsers = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getApiUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        }).addCase(getApiUsers.rejected, () => {
            console.error("No se han podido encontrar usuarios.");
        });

        builder.addCase(createNewUser.fulfilled, (state, action) => {
            const newuser = action.payload.newuser;

            state.users = [...state.users, newuser];
        });

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            const olduser = action.payload.olduser;

            state.users = state.users.filter(
                (user) => user._id !== olduser._id
            );
        });

        builder.addCase(editUser.fulfilled, (state, action) => {

            state.users = state.users.map((user) => {
                return user._id === action.payload._id ? action.payload.newuser : user;
            });
        });

        builder.addCase(getUser.fulfilled, (state, action) => {
            const user = action.payload;
            state.user = user;
        });
    }

});

export default sliceUsers.reducer;
