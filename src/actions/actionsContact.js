import {
    createNewContact,
    deleteContact,
    editContact,
    getApiContact,
    getContact
} from "../features/sliceContact";
import { getToken } from "../helpers/helpers"

function getAllContacts(dispatch) {
    const data = {
        token: getToken()
    }
    dispatch(getApiContact(data));
}

function getOneContact(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };

    dispatch(getContact(data));
}

function createOneContact(dispatch, contact) {
    const data = {
        contact: contact,
        token: getToken()
    };

    dispatch(createNewContact(data));
}

function updateOneContact(dispatch, id, contact) {
    const data = {
        id: id,
        contact: contact,
        token: getToken()
    };
    dispatch(editContact(data));
}

function deleteOneContact(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };

    dispatch(deleteContact(data))
}

export {
    getAllContacts,
    getOneContact,
    createOneContact,
    updateOneContact,
    deleteOneContact
};
