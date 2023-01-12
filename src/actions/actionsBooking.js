import {
    createNewBooking,
    deleteBooking,
    editBooking,
    getApiBookings,
    getBooking
} from "../features/sliceBookings";
import { getToken } from "../helpers/helpers";

function getAllBookings(dispatch) {
    const data = {
        token: getToken()
    }
    dispatch(getApiBookings(data));
}

function getOneBooking(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };

    dispatch(getBooking(data));
}

function createOneBooking(dispatch, booking) {
    const data = {
        booking: booking,
        token: getToken()
    };

    dispatch(createNewBooking(data));
}

function updateOneBooking(dispatch, id, booking) {
    const data = {
        id: id,
        booking: booking,
        token: getToken()
    };

    dispatch(editBooking(data));
}

function deleteOneBooking(dispatch, id) {
    const data = {
        id: id,
        token: getToken()
    };

    dispatch(deleteBooking(data));
}

export {
    getAllBookings,
    getOneBooking,
    createOneBooking,
    updateOneBooking,
    deleteOneBooking
}
