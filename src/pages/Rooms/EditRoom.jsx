import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRoom } from '../../features/sliceRooms/sliceRooms';

const EditRoom = () => {
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.roomsReducer);

    const [roomEdit, setRoomEdit] = useState({
        id: room.id,
        number: room.number,
        photo: room.photo,
        type: room.type,
        amenities: room.amenities,
        price: room.price,
        offer: room.offer,
        status: room.status
    });

    const setEditRoom = () => {
        dispatch(editRoom(roomEdit));
    }

    return (
        <div>
            <h1>Edit Room Nº{room.number}</h1>
            <input type="number" placeholder="Number" value={roomEdit.number} onChange={(e) => setRoomEdit({ ...roomEdit, number: e.target.value })}></input>
            <input type="text" placeholder="Photo" value={roomEdit.photo} onChange={(e) => setRoomEdit({ ...roomEdit, photo: e.target.value })}></input>
            <select value={roomEdit.type} onChange={(e) => setRoomEdit({ ...roomEdit, type: e.target.value })}>
                <option>Single Bed</option>
                <option>Double Bed</option>
                <option>Double Superior</option>
                <option>Suite</option>
            </select>
            <p>amenities</p>
            <input type="text" placeholder="price" value={roomEdit.price} onChange={(e) => setRoomEdit({ ...roomEdit, price: e.target.value })}></input>
            <input type="text" placeholder="offer" value={roomEdit.offer} onChange={(e) => setRoomEdit({ ...roomEdit, offer: e.target.value })}></input>

            <button onClick={setEditRoom}>Editar habitacion</button>
        </div>
    );
}

export default EditRoom;
