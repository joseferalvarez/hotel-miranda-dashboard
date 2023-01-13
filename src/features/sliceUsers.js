import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchGET,
    fetchPOST,
    fetchDELETE,
    fetchPUT
} from "./fetchApi";

export const getApiUsers = createAsyncThunk(
    "users/fetchUser",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`);
    }
);

export const createNewUser = createAsyncThunk(
    "user/CreateUser", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`, { user: data.user });
    }
);

export const deleteUser = createAsyncThunk(
    "user/DeleteUser", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`);
    }
);

export const editUser = createAsyncThunk(
    "user/EditUser", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`, { user: data.user });
    }
);

export const getUser = createAsyncThunk(
    "user/GetUserDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`);
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
