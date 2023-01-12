import {
    createNewContact,
    deleteContact,
    editContact,
    getApiContact,
    getContact
} from "../features/sliceContact";

function getAllContacts(dispatch) {
    dispatch(getApiContact());
}

function getOneContact(dispatch, id) {
    const data = {
        id: id
    };

    dispatch(getContact(data));
}

function createOneContact(dispatch, contact) {
    const data = {
        contact: contact
    };

    dispatch(createNewContact(data));
}

function updateOneContact(dispatch, id, contact) {
    const data = {
        id: id,
        contact: contact
    };
    dispatch(editContact(data));
}

function deleteOneContact(dispatch, id) {
    const data = {
        id: id
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
