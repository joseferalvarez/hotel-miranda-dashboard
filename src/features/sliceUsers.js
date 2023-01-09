import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGET } from "./fetchApi";

export const getApiUsers = createAsyncThunk(
    "users/fetchUser",
    async () => {
        const token = JSON.parse(localStorage.getItem("auth")).token;

        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`, token);
    }
);

export const createNewUser = createAsyncThunk(
    "user/CreateUser", async (newUser) => {
        return await newUser;
    }
);

export const deleteUser = createAsyncThunk(
    "user/DeleteUser", async (idUser) => {
        return await idUser;
    }
);

export const editUser = createAsyncThunk(
    "user/EditUser", async (idUser) => {
        return await idUser;
    }
);

export const getUser = createAsyncThunk(
    "user/GetUserDetails", async (idUser) => {
        return await idUser;
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
            state.users = [...state.users, action.payload];
        });

        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
        });

        builder.addCase(editUser.fulfilled, (state, action) => {
            state.users = state.users.map((user) => {
                return user.id === action.payload.id ? action.payload : user;
            });
        });

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = state.users.find((user) => user.id === action.payload);
        });
    }

});

export default sliceUsers.reducer;
