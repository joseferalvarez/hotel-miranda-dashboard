import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    fetchGET,
    fetchPOST,
    fetchDELETE,
    fetchPUT
} from "./fetchApi";

/* Return an object with all users */
export const getApiUsers = createAsyncThunk(
    "users/fetchUser",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`);
    }
);

/* Insert a new user */
export const createNewUser = createAsyncThunk(
    "user/CreateUser", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/users`, { user: data.user });
    }
);

/* Delete an existing user */
export const deleteUser = createAsyncThunk(
    "user/DeleteUser", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`);
    }
);

/* Update an existing user */
export const editUser = createAsyncThunk(
    "user/EditUser", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`, { user: data.user });
    }
);

/* Get an existing user object */
export const getUser = createAsyncThunk(
    "user/GetUserDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/users/${data.id}`);
    }
);

/* Initial state when slice load */
const initialState = {
    users: [],
    user: null
}

/* Users slice */
export const sliceUsers = createSlice({
    name: "users",
    initialState,
    reducers: {

        /* Delete the state of a single user */
        resetUserState: (state, action) => {
            if (state.user) {
                state.user = null;
            }
        }
    },
    extraReducers: (builder) => {

        const TOAST_ID = ["GET_ALL_USERS", "POST_ONE_USER", "DELETE_ONE_USER", "PUT_ONE_USER", "GET_ONE_USER"];

        /* Promise builder of getApiUsers (GET all users)*/
        builder.addCase(getApiUsers.pending, () => {
            toast("Looking for users...", { toastId: TOAST_ID[0], autoClose: false });
        }).addCase(getApiUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            toast.update(TOAST_ID[0], {
                render: "Users loaded succesfully",
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getApiUsers.rejected, () => {
            toast.update(TOAST_ID[0], {
                render: "Users not found",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of createNewUser (POST a new user) */
        builder.addCase(createNewUser.pending, () => {
            toast("Creating the new user...", { toastId: TOAST_ID[1], autoClose: false });
        }).addCase(createNewUser.fulfilled, (state, action) => {
            const newuser = action.payload.newuser;
            state.users = [...state.users, newuser];
            toast.update(TOAST_ID[1], {
                render: `User ${newuser.name} created succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(createNewUser.rejected, () => {
            toast.update(TOAST_ID[1], {
                render: "There has been an error creating the user",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of deleteUser (DELETE an existing user) */
        builder.addCase(deleteUser.pending, () => {
            toast("Deleting the user...", { toastId: TOAST_ID[2], autoClose: false });
        }).addCase(deleteUser.fulfilled, (state, action) => {
            const olduser = action.payload.olduser;
            state.users = state.users.filter(
                (user) => user._id !== olduser._id
            );
            toast.update(TOAST_ID[2], {
                render: `User ${olduser.name} deleted succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(deleteUser.rejected, () => {
            toast.update(TOAST_ID[2], {
                render: "There has been an error deleting the user",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of editUser (PUT an existing user)*/
        builder.addCase(editUser.pending, () => {
            toast("Updating the user...", { toastId: TOAST_ID[3], autoClose: false });
        }).addCase(editUser.fulfilled, (state, action) => {
            const newuser = action.payload.newuser;
            state.users = state.users.map((user) => {
                return user._id === newuser._id ? newuser : user;
            });
            toast.update(TOAST_ID[3], {
                render: `User ${newuser.name} updated succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(editUser.rejected, () => {
            toast.update(TOAST_ID[3], {
                render: "There has been an error updating the user",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of getUser (GET an existing user) */
        builder.addCase(getUser.pending, () => {
            toast("Loading user...", { toastId: TOAST_ID[4], autoClose: false });
        }).addCase(getUser.fulfilled, (state, action) => {
            const user = action.payload;
            state.user = user;
            toast.update(TOAST_ID[4], {
                render: `User ${user.name} loaded`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
            toast.success();
        }).addCase(getUser.rejected, () => {
            toast.update(TOAST_ID[4], {
                render: "There has been an error loading the user",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });
    }
});

export const {
    resetUserState
} = sliceUsers.actions;

export default sliceUsers.reducer;
