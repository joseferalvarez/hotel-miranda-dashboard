import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchLogin from "./fetchLogin";

export const getLogin = createAsyncThunk(
    "login/getLogin",
    async (user) => {
        return await fetchLogin(user);
    }
);

export const getLocalAuth = createAsyncThunk(
    "login/getLocalAuth",
    async (auth) => {
        return await auth;
    }
);

const initialState = {
    user: {
        _id: null,
        email: null
    },

    token: null
};

export const sliceLogin = createSlice({
    name: "login",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getLogin.fulfilled, (state, action) => {
            const user = action.payload.user;
            const token = action.payload.token;

            localStorage.setItem("auth", JSON.stringify({
                user: user,
                token: token
            }));

            state.user = {
                _id: user._id,
                email: user.email
            };

            state.token = token;
        });
        builder.addCase(getLocalAuth.fulfilled, (state, action) => {
            const auth = action.payload;
            state.user = auth.user;
            state.token = auth.token;
        });
    }
});

export default sliceLogin.reducer;
