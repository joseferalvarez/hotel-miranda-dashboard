import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    fetchGET,
    fetchPOST,
    fetchPUT,
    fetchDELETE
} from "./fetchApi";

/* Return an object with all contacts*/
export const getApiContact = createAsyncThunk(
    "contact/fetchContacts",
    async () => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts`);
    }
);

/* Insert a new contact */
export const createNewContact = createAsyncThunk(
    "contact/CreateContact", async (data) => {
        return await fetchPOST(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts`, { contact: data.contact });
    }
);

/* Delete an existing contact */
export const deleteContact = createAsyncThunk(
    "contact/DeleteContact", async (data) => {
        return await fetchDELETE(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${data.id}`);
    }
);

/* Edit an existing contact */
export const editContact = createAsyncThunk(
    "contact/EditContact", async (data) => {
        return await fetchPUT(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${data.id}`, { contact: data.contact });
    }
);

/* Get an existing contact object */
export const getContact = createAsyncThunk(
    "contact/GetContactDetails", async (data) => {
        return await fetchGET(`${process.env.REACT_APP_LOCAL_DOMAIN}/contacts/${data.id}`);
    }
);

/* Initial state when slice load */
const initialState = {
    contacts: [],
    contact: null
}

/* Rooms slice */
export const sliceContact = createSlice({
    name: "contact",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        /* Promise builder of getApiContact (GET all contacts)*/
        builder.addCase(getApiContact.fulfilled, (state, action) => {
            state.contacts = action.payload;
            toast.success("Contacts loaded succesfully");
        }).addCase(getApiContact.rejected, () => {
            toast.error("Contacts not found");
        }).addCase(getApiContact.pending, () => {
            toast.loading("Looking for contacts...");
        });

        /* Promise builder of createNewContact (POST a new contact) */
        builder.addCase(createNewContact.fulfilled, (state, action) => {
            const newcontact = action.payload.newcontact;
            state.contacts = [...state.contacts, newcontact];
            toast.success(`Contact ${newcontact.customer} created succesfully`);
        }).addCase(createNewContact.rejected, () => {
            toast.error("There has been an error creating the contact");
        }).addCase(createNewContact.pending, () => {
            toast.loading("Creating the new contact...");
        });

        /* Promise builder of deleteContact (DELETE an existing contact)*/
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            const oldcontact = action.payload.oldcontact;
            state.contacts = state.contacts.filter(
                (contact) => contact._id !== oldcontact._id
            );
            toast.success(`Contact ${oldcontact.customer} deleted succesfully`);
        }).addCase(deleteContact.rejected, () => {
            toast.error("There has been an error deleting the contact");
        }).addCase(deleteContact.pending, () => {
            toast.loading("Deleting the contact...");
        });

        /* Promise builder of editContact (PUT an existing contact)*/
        builder.addCase(editContact.fulfilled, (state, action) => {
            const newContact = action.payload.newcontact;
            state.contacts = state.contacts.map((contact) => {
                return contact._id === newContact._id ? newContact : contact;
            });
            toast.success(`Contact ${newContact.customer} updated succesfully`);
        }).addCase(editContact.rejected, () => {
            toast.error("There has been an error updating the contact");
        }).addCase(editContact.pending, () => {
            toast.loading("Updating the contact");
        });

        builder.addCase(getContact.fulfilled, (state, action) => {
            const contact = action.payload;

            state.contact = contact;
        });
    }
});

export default sliceContact.reducer;
