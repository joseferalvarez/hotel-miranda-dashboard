import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hooks/hooks';
import { editRoom } from '../../features/sliceRooms/sliceRooms';
import { IntRoom } from '../../interfaces/Rooms';

type Room = {
    room: IntRoom;
}

const EditRoom = () => {
    const dispatch = useAppDispatch();
    const { room } = useAppSelector<Room>(state => state.roomsReducer)

    const [roomEdit, setRoomEdit] = useState<IntRoom | any>({
        id: room.id,
        number: room.number,
        photo: room.photo,
        type: room.type,
        amenities: room.amenities,
        price: room.price,
        offer: room.offer,
        status: room.status
    });

    const setEditRoom = (): void => {
        dispatch(editRoom(roomEdit));
    }

    return (
        <div>
            <h1>Edit Room Nº{room.number}</h1>
            <input type="number" placeholder="Number" value={roomEdit.number} onChange={(e) => setRoomEdit({ ...roomEdit, number: Number(e.target.value) })}></input>
            <input type="text" placeholder="Photo" value={roomEdit.photo} onChange={(e) => setRoomEdit({ ...roomEdit, photo: e.target.value })}></input>
            <select value={roomEdit.type} onChange={(e) => setRoomEdit({ ...roomEdit, type: e.target.value })}>
                <option>Single Bed</option>
                <option>Double Bed</option>
                <option>Double Superior</option>
                <option>Suite</option>
            </select>
            <p>amenities</p>
            <input type="number" placeholder="price" value={roomEdit.price} onChange={(e) => setRoomEdit({ ...roomEdit, price: Number(e.target.value) })}></input>
            <input type="number" placeholder="offer" value={roomEdit.offer} onChange={(e) => setRoomEdit({ ...roomEdit, offer: Number(e.target.value) })}></input>

            <button onClick={setEditRoom}>Editar habitacion</button>
        </div>
    );
}

export default EditRoom;
