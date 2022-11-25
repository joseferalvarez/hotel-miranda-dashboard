import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addNewRoom, createNewRoom } from "../../features/sliceRooms.js"

const NewRoom = () => {

    const dispatch = useDispatch();

    const { rooms } = useSelector((state) => state.roomsReducer);

    const [room, setRoom] = useState({
        id: "",
        number: "",
        photo: "",
        type: "Single Bed",
        amenities: [],
        price: "",
        offer: "",
        status: ""
    });

    const createRoom = () => {
        dispatch(createNewRoom(room))
        console.log(rooms);
    }

    return (
        <div>
            <h1>newroom</h1>
            <input type="number" value={room.id} onChange={(e) => setRoom({ ...room, id: e.target.value })}></input>
            <input type="number" placeholder="Number" value={room.number} onChange={(e) => setRoom({ ...room, number: e.target.value })}></input>
            <input type="text" placeholder="Photo" value={room.photo} onChange={(e) => setRoom({ ...room, photo: e.target.value })}></input>
            <select value={room.type} onChange={(e) => setRoom({ ...room, type: e.target.value })}>
                <option>Single Bed</option>
                <option>Double Bed</option>
                <option>Double Superior</option>
                <option>Suite</option>
            </select>
            <p>amenities</p>
            <input type="text" placeholder="price" value={room.price} onChange={(e) => setRoom({ ...room, price: e.target.value })}></input>
            <input type="text" placeholder="offer" value={room.offer} onChange={(e) => setRoom({ ...room, offer: e.target.value })}></input>

            <button onClick={createRoom}>crear habitacion</button>
        </div>
    );
}

export default NewRoom;
