import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../fetchApi";

import type { IntBooking } from "../../interfaces/Booking";

interface ContactState {
    contacts: IntBooking[] | [],
    contact: IntBooking | null | undefined;
}

interface IntAction {
    type: string,
    payload: any,
    meta: any
}

export const getApiContact = createAsyncThunk(
    "contact/fetchContacts",
    async () => {
        return await fetchApi("Bookings");
    }
);

export const createNewContact = createAsyncThunk(
    "contact/CreateContact", async (newContact: IntBooking) => {
        return await newContact;
    }
);

export const deleteContact = createAsyncThunk(
    "contact/DeleteContact", async (idContact: number) => {
        return await idContact;
    }
);

export const editContact = createAsyncThunk(
    "contact/EditContact", async (idContact: number) => {
        return await idContact;
    }
);

export const getContact = createAsyncThunk(
    "contact/GetContactDetails", async (idContact: number) => {
        return await idContact;
    }
);

const initialState: ContactState = {
    contacts: [],
    contact: null
}
export const sliceContact = createSlice({
    name: "contact",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getApiContact.fulfilled, (state: ContactState, action: IntAction) => {
            state.contacts = action.payload;
        }).addCase(getApiContact.rejected, () => {
            console.error("No se han podido encontrar reservas.");
        });

        builder.addCase(createNewContact.fulfilled, (state: ContactState, action: IntAction) => {
            state.contacts = [...state.contacts, action.payload];
        });

        builder.addCase(deleteContact.fulfilled, (state: ContactState, action: IntAction) => {
            state.contacts = state.contacts.filter(
                (contact: IntBooking) => contact.id !== action.payload
            );
        });

        builder.addCase(editContact.fulfilled, (state: ContactState, action: IntAction) => {
            state.contacts = state.contacts.map((contact: IntBooking) => {
                return contact.id === action.payload.id ? action.payload : contact;
            });
        });

        builder.addCase(getContact.fulfilled, (state: ContactState, action: IntAction) => {
            state.contact = state.contacts.find((contact: IntBooking) => contact.id === action.payload);
        });
    }
});

export default sliceContact.reducer;
