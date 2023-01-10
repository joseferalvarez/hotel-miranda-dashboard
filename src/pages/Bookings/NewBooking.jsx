import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const NewBooking = () => {

    const { users } = useSelector((state) => state.usersReducer);
    const { rooms } = useSelector((state) => state.roomsReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [booking, setBooking] = useState({
        user_id: "",
        room_id: "",
        name: "",
        order: "",
        checkin: "",
        checkout: "",
        type: "",
        numroom: "",
        price: "",
        request: "",
        amenities: "",
        photos: "",
        description: "",
        status: ""
    });

    return (
        <div>
            <select onChange={(e) => console.log(e.target.value)}>
                {rooms.map((room, index) => (
                    <option value={room._id} key={index}>{room.numroom}</option>
                ))}
            </select>
            <select onChange={(e) => console.log(e.target.value)}>
                {users.map((user, index) => (
                    <option value={user._id} key={index}>{user.name}</option>
                ))}
            </select>
        </div>
    );
}

export default NewBooking;
