import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { createOneRoom } from '../../actions/actions';

const NewRoom = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [room, setRoom] = useState({
        numroom: "",
        photos: "",
        type: "Single Bed",
        amenities: [],
        price: "",
        offer: "",
        status: "",
        cancellation: ""
    });

    const createRoom = () => {
        createOneRoom(dispatch, room);
        navigate("/rooms");
    }

    return (
        <div>
            <h1>newroom</h1>
            <input type="number" placeholder="Number" value={room.numroom} onChange={(e) => setRoom({ ...room, numroom: e.target.value })}></input>
            <input type="text" placeholder="Photo" value={room.photos} onChange={(e) => setRoom({ ...room, photos: e.target.value })}></input>
            <select value={room.type} onChange={(e) => setRoom({ ...room, type: e.target.value })}>
                <option>Single Bed</option>
                <option>Double Bed</option>
                <option>Double Superior</option>
                <option>Suite</option>
            </select>
            <p>amenities</p>
            <input type="text" placeholder="price" value={room.price} onChange={(e) => setRoom({ ...room, price: e.target.value })}></input>
            <input type="text" placeholder="offer" value={room.offer} onChange={(e) => setRoom({ ...room, offer: e.target.value })}></input>
            <input type="number" placeholder="status" value={room.status} onChange={(e) => setRoom({ ...room, status: e.target.value })}></input>
            <input type="text" placeholder="cancellation" value={room.cancellation} onChange={(e) => setRoom({ ...room, cancellation: e.target.value })}></input>

            <button onClick={createRoom}>crear habitacion</button>
        </div>
    );
}

export default NewRoom;
