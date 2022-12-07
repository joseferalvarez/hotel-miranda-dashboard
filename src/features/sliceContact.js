import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./fetchApi";

export const getApiContact = createAsyncThunk(
    "contact/fetchContacts",
    async () => {
        return await fetchApi("Bookings");
    }
);

export const createNewContact = createAsyncThunk(
    "contact/CreateContact", async (newContact) => {
        return await newContact;
    }
);

export const deleteContact = createAsyncThunk(
    "contact/DeleteContact", async (idContact) => {
        return await idContact;
    }
);

export const editContact = createAsyncThunk(
    "contact/EditContact", async (idContact) => {
        return await idContact;
    }
);

export const getContact = createAsyncThunk(
    "contact/GetContactDetails", async (idContact) => {
        return await idContact;
    }
);

const initialState = {
    contacts: [],
    contact: null
}
export const sliceContact = createSlice({
    name: "contact",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getApiContact.fulfilled, (state, action) => {
            state.contacts = action.payload;
        }).addCase(getApiContact.rejected, () => {
            console.error("No se han podido encontrar reservas.");
        });

        builder.addCase(createNewContact.fulfilled, (state, action) => {
            state.contacts = [...state.contacts, action.payload];
        });

        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.contact = state.contact.filter(
                (contact) => contact.id !== action.payload
            );
        });

        builder.addCase(editContact.fulfilled, (state, action) => {
            state.contacts = state.rooms.map((contact) => {
                return contact.id === action.payload.id ? action.payload : contact;
            });
        });

        builder.addCase(getContact.fulfilled, (state, action) => {
            state.contact = state.contacts.find((contact) => contact.id === action.payload);
        });
    }
});

export default sliceContact.reducer;
