import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hooks/hooks.js';
import { createNewRoom } from "../../features/sliceRooms/sliceRooms.js"
import { IntRoom } from '../../interfaces/Rooms.js';

type Room = {
    rooms: IntRoom[];
}

const NewRoom = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const { rooms } = useAppSelector<Room>(state => state.roomsReducer);

    const [room, setRoom] = useState<IntRoom>({
        id: null,
        number: null,
        photo: null,
        type: "Single Bed",
        amenities: [],
        price: null,
        offer: null,
        status: null
    });

    const createRoom = (): void => {
        dispatch(createNewRoom(room))
        console.log(rooms);
    }

    return (
        <div>
            <h1>newroom</h1>
            <input type="number" value={room.id} onChange={(e) => setRoom({ ...room, id: Number(e.target.value) })}></input>
            <input type="number" placeholder="Number" value={room.number} onChange={(e) => setRoom({ ...room, number: Number(e.target.value) })}></input>
            <input type="text" placeholder="Photo" value={room.photo} onChange={(e) => setRoom({ ...room, photo: e.target.value })}></input>
            <select value={room.type} onChange={(e) => setRoom({ ...room, type: e.target.value })}>
                <option>Single Bed</option>
                <option>Double Bed</option>
                <option>Double Superior</option>
                <option>Suite</option>
            </select>
            <p>amenities</p>
            <input type="text" placeholder="price" value={room.price} onChange={(e) => setRoom({ ...room, price: Number(e.target.value) })}></input>
            <input type="text" placeholder="offer" value={room.offer} onChange={(e) => setRoom({ ...room, offer: Number(e.target.value) })}></input>

            <button onClick={createRoom}>crear habitacion</button>
        </div>
    );
}

export default NewRoom;
