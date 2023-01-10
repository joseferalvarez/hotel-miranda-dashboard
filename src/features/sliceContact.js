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
    "contact/CreateContact", async (newContact) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts`, token, { contact: newContact });
    }
);

export const deleteContact = createAsyncThunk(
    "contact/DeleteContact", async (idContact) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${idContact}`, token);
    }
);

export const editContact = createAsyncThunk(
    "contact/EditContact", async (idContact, newContact) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${idContact}`, token, { room: newContact });
    }
);

export const getContact = createAsyncThunk(
    "contact/GetContactDetails", async (idContact) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${idContact}`, token);
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
