import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../fetchApi";

import type { IntUser } from "../../interfaces/Users";

interface UserState {
    users: IntUser[] | [],
    user: IntUser | null | undefined;
}

interface IntAction {
    type: string,
    payload: any,
    meta: any
}

export const getApiUsers = createAsyncThunk(
    "users/fetchUser",
    async () => {
        return await fetchApi("Users");
    }
);

export const createNewUser = createAsyncThunk(
    "user/CreateUser", async (newUser: IntUser) => {
        return await newUser;
    }
);

export const deleteUser = createAsyncThunk(
    "user/DeleteUser", async (idUser: number) => {
        return await idUser;
    }
);

export const editUser = createAsyncThunk(
    "user/EditUser", async (idUser: number) => {
        return await idUser;
    }
);

export const getUser = createAsyncThunk(
    "user/GetUserDetails", async (idUser: number) => {
        return await idUser;
    }
);

const initialState: UserState = {
    users: [],
    user: null
}
export const sliceUsers = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getApiUsers.fulfilled, (state: UserState, action: IntAction) => {
            state.users = action.payload;
        }).addCase(getApiUsers.rejected, () => {
            console.error("No se han podido encontrar usuarios.");
        });

        builder.addCase(createNewUser.fulfilled, (state: UserState, action: IntAction) => {
            state.users = [...state.users, action.payload];
        });

        builder.addCase(deleteUser.fulfilled, (state: UserState, action: IntAction) => {
            state.users = state.users.filter(
                (user: IntUser) => user.id !== action.payload
            );
        });

        builder.addCase(editUser.fulfilled, (state: UserState, action: IntAction) => {
            state.users = state.users.map((user: IntUser) => {
                return user.id === action.payload.id ? action.payload : user;
            });
        });

        builder.addCase(getUser.fulfilled, (state: UserState, action: IntAction) => {
            state.user = state.users.find((user: IntUser) => user.id === action.payload);
        });
    }

});

export default sliceUsers.reducer;
