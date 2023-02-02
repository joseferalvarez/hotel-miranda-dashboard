/**React */
import React from 'react';
/**Styles */
import { Card, Icon } from '../../Styles/Dashboard/CardInfo';
import { BiBed } from "react-icons/bi";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

/**Component */
const CardInfo = ({ data }) => {
    /**Set card icon */
    const setIcon = () => {
        switch (data.type) {
            case "NewBookings":
                return (
                    <BiBed />
                );
            case "Checkin":
                return (
                    <IoIosLogOut />
                );
            case "Checkout":
                return (
                    <IoIosLogIn />
                );
            case "Available":
                return (
                    <BsFillCalendar2CheckFill />
                );
            default:
                break;
        }
    }

    /**HTML */
    if (data) {
        return (
            <Card>
                <div>
                    <Icon typebooking={data.type}>
                        {setIcon()}
                    </Icon>
                </div>
                <div>
                    <p>{data.number}</p>
                    <p>{data.text}</p>
                </div>
            </Card>
        );
    }
}

export default CardInfo;
