import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

const ToastDashboard = () => {
    return (
        <>
            <ToastContainer containerId={"GET_ALL_ROOMS_TOAST"} position='bottom-right' theme='dark' transition={Slide} />
            <ToastContainer containerId={"GET_ALL_BOOKINGS_TOAST"} position='bottom-right' theme='dark' transition={Slide} />
            <ToastContainer containerId={"GET_ALL_CONTACTS_TOAST"} position='bottom-right' theme='dark' transition={Slide} />
        </>
    );
}

export default ToastDashboard;
