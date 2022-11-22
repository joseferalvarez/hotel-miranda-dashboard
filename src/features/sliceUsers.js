import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

/*Estado inicial del reducer*/
export const getApiUsers = createAsyncThunk(
    "list/fetchusers",
    async () => {
        return await fetchApi("Users");
    }
);

const initialState = {
    users: []
}
export const sliceUsers = createSlice({
    name: "users",
    initialState,
    reducers: {
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

/* export const { } = sliceUsers.actions; */
export default sliceUsers.reducer;
