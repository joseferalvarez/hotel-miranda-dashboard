import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

const token = JSON.parse(localStorage.getItem("auth")).token;

export const getApiContact = createAsyncThunk(
    "contact/fetchContacts",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts`, token);
    }
);

export const createNewContact = createAsyncThunk(
    "contact/CreateContact", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts`, token, { contact: data.contact });
    }
);

export const deleteContact = createAsyncThunk(
    "contact/DeleteContact", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${data.id}`, token);
    }
);

export const editContact = createAsyncThunk(
    "contact/EditContact", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${data.id}`, token, { contact: data.contact });
    }
);

export const getContact = createAsyncThunk(
    "contact/GetContactDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${data.id}`, token);
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
            const newbooking = action.payload.newbooking;

            state.contacts = [...state.contacts, newbooking];
        });

        builder.addCase(deleteContact.fulfilled, (state, action) => {
            const oldcontact = action.payload.oldcontact;

            state.contact = state.contact.filter(
                (contact) => contact._id !== oldcontact._id
            );
        });

        builder.addCase(editContact.fulfilled, (state, action) => {
            const newContact = action.payload.newcontact;

            state.contacts = state.rooms.map((contact) => {
                return contact.id === newContact._id ? newContact : contact;
            });
        });

        builder.addCase(getContact.fulfilled, (state, action) => {
            const contact = action.payload;

            state.contact = contact;
        });
    }
});

export default sliceContact.reducer;
