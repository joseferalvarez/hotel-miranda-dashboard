import {
    createNewBooking,
    deleteBooking,
    editBooking,
    getApiBookings,
    getBooking,
    resetBookingState
} from "../features/sliceBookings";

function getAllBookings(dispatch) {
    dispatch(getApiBookings());
}

function getOneBooking(dispatch, id) {
    const data = {
        id: id
    };
    dispatch(getBooking(data));
}

function createOneBooking(dispatch, booking) {
    const data = {
        booking: booking
    };

    dispatch(createNewBooking(data));
}

function updateOneBooking(dispatch, id, booking) {
    const data = {
        id: id,
        booking: booking
    };

    dispatch(editBooking(data));
}

function deleteOneBooking(dispatch, id) {
    const data = {
        id: id
    };

    dispatch(deleteBooking(data));
}

function resetBooking(dispatch) {
    dispatch(resetBookingState());
}

export {
    getAllBookings,
    getOneBooking,
    createOneBooking,
    updateOneBooking,
    deleteOneBooking,
    resetBooking
}
