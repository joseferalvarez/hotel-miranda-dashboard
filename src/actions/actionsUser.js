import {
    createNewUser,
    deleteUser,
    editUser,
    getApiUsers,
    getUser
} from "../features/sliceUsers";
import { getToken } from "../helpers/helpers";

function getAllUsers(dispatch) {
    const data = {
        token: getToken()
    };
    dispatch(getApiUsers(data));
}

function getOneUser(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    }

    dispatch(getUser(data));
}

function createOneUser(dispatch, user) {
    const data = {
        user: user,
        token: getToken()
    }

    dispatch(createNewUser(data));
}

function updateOneUser(dispatch, id, user) {
    const data = {
        id: id,
        user: user,
        token: getToken()
    };

    dispatch(editUser(data));
}

function deleteOneUser(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };

    dispatch(deleteUser(data))
}

export {
    getAllUsers,
    getOneUser,
    createOneUser,
    updateOneUser,
    deleteOneUser
}
