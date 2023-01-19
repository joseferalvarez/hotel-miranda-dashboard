import {
    createNewUser,
    deleteUser,
    editUser,
    getApiUsers,
    getUser,
    resetUserState
} from "../features/sliceUsers";

function getAllUsers(dispatch) {
    dispatch(getApiUsers());
}

function getOneUser(dispatch, id) {
    const data = {
        id: id
    }

    dispatch(getUser(data));
}

function createOneUser(dispatch, user) {
    const data = {
        user: user
    }

    dispatch(createNewUser(data));
}

function updateOneUser(dispatch, id, user) {
    const data = {
        id: id,
        user: user
    };

    dispatch(editUser(data));
}

function deleteOneUser(dispatch, id) {
    const data = {
        id: id
    };

    dispatch(deleteUser(data))
}

function resetUser(dispatch) {
    dispatch(resetUserState());
}

export {
    getAllUsers,
    getOneUser,
    createOneUser,
    updateOneUser,
    deleteOneUser,
    resetUser
}
