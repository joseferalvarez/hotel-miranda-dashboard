import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchLogin from "./fetchLogin";
import { fetchGET } from "./fetchApi";

/* Get login user from database */
export const getLogin = createAsyncThunk(
    "login/getLogin",
    async (data) => {
        return await fetchLogin(data);
    }
);

/* Looking for local auth user and token */
export const getLocalAuth = createAsyncThunk(
    "login/getLocalAuth",
    async (data) => {
        return await data;
    }
);

/* Log out from app */
export const setLogout = createAsyncThunk(
    "login/setLogout",
    async () => {
        return await "";
    }
);

/* Get the actual user from database */
export const getCurrentUser = createAsyncThunk(
    "user/GetCurrentUser", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`);
    }
);

/* Initial state when slice load */
const initialState = {
    user: {
        _id: null,
        email: null
    },

    token: null,
    userdata: null
};

/* Login slice */
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
            const data = action.payload;
            state.user = data.user;
            state.token = data.token;
        });
        builder.addCase(setLogout.fulfilled, (state, action) => {
            state.user = null;
            state.token = null;
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            const user = action.payload;
            state.userdata = user;
        });
    }
});

export default sliceLogin.reducer;
