import {
    createNewRoom,
    deleteRoom,
    editRoom,
    getApiRooms,
    getRoom
} from "../features/sliceRooms";
import { getToken } from "../helpers/helpers";

function getAllRooms(dispatch) {
    const data = {
        token: getToken()
    }
    dispatch(getApiRooms(data));
}

function getOneRoom(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };
    dispatch(getRoom(data));
}

function createOneRoom(dispatch, room) {
    const data = {
        room: room,
        token: getToken()
    };
    dispatch(createNewRoom(data));
}

function updateOneRoom(dispatch, id, room) {
    const data = {
        id: id,
        room: room,
        token: getToken()
    };

    dispatch(editRoom(data));
}

function deleteOneRoom(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };

    dispatch(deleteRoom(data));
}

export {
    getAllRooms,
    getOneRoom,
    createOneRoom,
    updateOneRoom,
    deleteOneRoom
}
