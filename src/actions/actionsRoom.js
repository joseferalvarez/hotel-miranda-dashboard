import {
    createNewRoom,
    deleteRoom,
    editRoom,
    getApiRooms,
    getRoom,
    resetRoomState
} from "../features/sliceRooms";

function getAllRooms(dispatch) {
    dispatch(getApiRooms());
}

function getOneRoom(dispatch, id) {
    const data = {
        id: id
    };
    dispatch(getRoom(data));
}

function createOneRoom(dispatch, room) {
    const data = {
        room: room
    };
    dispatch(createNewRoom(data));
}

function updateOneRoom(dispatch, id, room) {
    const data = {
        id: id,
        room: room
    };

    dispatch(editRoom(data));
}

function deleteOneRoom(dispatch, id) {
    const data = {
        id: id
    };

    dispatch(deleteRoom(data));
}

function resetRoom(dispatch) {
    dispatch(resetRoomState());
}

export {
    getAllRooms,
    getOneRoom,
    createOneRoom,
    updateOneRoom,
    deleteOneRoom,
    resetRoom
}
