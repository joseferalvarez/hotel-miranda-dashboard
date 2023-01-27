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

        /* Promise builder of getApiUsers (GET all users)*/
        builder.addCase(getApiUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            toast.success("Users loaded succesfully");
        }).addCase(getApiUsers.rejected, () => {
            toast.error("Users not found");
        }).addCase(getApiUsers.pending, () => {
            toast.loading("Looking for users...");
        });

        /* Promise builder of createNewUser (POST a new user) */
        builder.addCase(createNewUser.fulfilled, (state, action) => {
            const newuser = action.payload.newuser;
            state.users = [...state.users, newuser];
            toast.success(`User ${newuser.name} created succesfully`);
        }).addCase(createNewUser.rejected, () => {
            toast.error("There has been an error creating the user");
        }).addCase(createNewUser.pending, () => {
            toast.loading("Creating the new user...");
        });

        /* Promise builder of deleteUser (DELETE an existing user) */
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            const olduser = action.payload.olduser;
            state.users = state.users.filter(
                (user) => user._id !== olduser._id
            );
            toast.success(`User ${olduser.name} deleted succesfully`);
        }).addCase(deleteUser.rejected, () => {
            toast.error("There has been an error deleting the user");
        }).addCase(deleteUser.pending, () => {
            toast.loading("Deleting the user...");
        });

        /* Promise builder of editUser (PUT an existing user)*/
        builder.addCase(editUser.fulfilled, (state, action) => {
            const newuser = action.payload.newuser;
            state.users = state.users.map((user) => {
                return user._id === newuser._id ? newuser : user;
            });
            toast.success(`User ${newuser.name} updated succesfully`);
        }).addCase(editUser.rejected, () => {
            toast.error("There has been an error updating the user");
        }).addCase(editUser.pending, () => {
            toast.loading("Updating the user");
        });

        /* Promise builder of getUser (GET an existing user) */
        builder.addCase(getUser.fulfilled, (state, action) => {
            const user = action.payload;
            state.user = user;
            toast.success(`User ${user.name} loaded`);
        }).addCase(getUser.rejected, () => {
            toast.error("There has been an error loading the user");
        }).addCase(getUser.pending, () => {
            toast.loading("Loading user...");
        });
    }
});

export const {
    resetUserState
} = sliceUsers.actions;

export default sliceUsers.reducer;
