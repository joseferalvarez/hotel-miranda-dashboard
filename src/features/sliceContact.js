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

        const TOAST_ID = ["GET_ALL_CONTACTS", "POST_ONE_CONTACT", "DELETE_ONE_CONTACT", "PUT_ONE_CONTACT", "GET_ONE_CONTACT"];

        /* Promise builder of getApiContact (GET all contacts)*/
        builder.addCase(getApiContact.pending, () => {
            toast("Looking for contacts...", { toastId: TOAST_ID[0], autoClose: false, containerId: "GET_ALL_CONTACTS_TOAST" });
        }).addCase(getApiContact.fulfilled, (state, action) => {
            state.contacts = action.payload;
            toast.update(TOAST_ID[0], {
                render: "Contacts loaded succesfully",
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getApiContact.rejected, () => {
            toast.update(TOAST_ID[0], {
                render: "Contacts not found",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of createNewContact (POST a new contact) */
        builder.addCase(createNewContact.pending, () => {
            toast("Creating the new contact...", { toastId: TOAST_ID[1], autoClose: false });
        }).addCase(createNewContact.fulfilled, (state, action) => {
            const newcontact = action.payload.newcontact;
            state.contacts = [...state.contacts, newcontact];
            toast.update(TOAST_ID[1], {
                render: `Contact ${newcontact.customer} created succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(createNewContact.rejected, () => {
            toast.update(TOAST_ID[1], {
                render: "There has been an error creating the contact",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of deleteContact (DELETE an existing contact)*/
        builder.addCase(deleteContact.pending, () => {
            toast("Deleting the contact...", { toastId: TOAST_ID[2], autoClose: false });
        }).addCase(deleteContact.fulfilled, (state, action) => {
            const oldcontact = action.payload.oldcontact;
            state.contacts = state.contacts.filter(
                (contact) => contact._id !== oldcontact._id
            );
            toast.update(TOAST_ID[2], {
                render: `Contact ${oldcontact.customer} deleted succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(deleteContact.rejected, () => {
            toast.update(TOAST_ID[2], {
                render: "There has been an error deleting the contact",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of editContact (PUT an existing contact)*/
        builder.addCase(editContact.pending, () => {
            toast("Updating the contact...", { toastId: TOAST_ID[3], autoClose: false });
        }).addCase(editContact.fulfilled, (state, action) => {
            const newContact = action.payload.newcontact;
            state.contacts = state.contacts.map((contact) => {
                return contact._id === newContact._id ? newContact : contact;
            });
            toast.update(TOAST_ID[3], {
                render: `Contact ${newContact.customer} updated succesfully`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(editContact.rejected, () => {
            toast.update(TOAST_ID[3], {
                render: "There has been an error updating the contact",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });

        /* Promise builder of getContact (GET a single contact)*/
        builder.addCase(getContact.pending, () => {
            toast("Loading contact...", { toastId: TOAST_ID[4], autoClose: false });
        }).addCase(getContact.fulfilled, (state, action) => {
            const contact = action.payload;
            state.contact = contact;
            toast.update(TOAST_ID[4], {
                render: `Contact ${contact.customer} loaded`,
                type: toast.TYPE.SUCCESS,
                autoClose: 1500
            });
        }).addCase(getContact.rejected, () => {
            toast.update(TOAST_ID[4], {
                render: "There has been an error loading the contact",
                type: toast.TYPE.ERROR,
                autoClose: 1500
            });
        });
    }
});

export default sliceContact.reducer;
