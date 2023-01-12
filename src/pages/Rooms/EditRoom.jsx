import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRoom, getRoom } from '../../features/sliceRooms';
import { useNavigate, useParams } from 'react-router';

const EditRoom = () => {
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.roomsReducer);
    const params = useParams();
    const navigate = useNavigate();

    const [roomEdit, setRoomEdit] = useState(null);

    const setEditRoom = () => {
        const data = {
            id: room._id,
            room: roomEdit
        };

        dispatch(editRoom(data));
        navigate("/rooms");
    }

    const getStatusNumber = (status) => {
        switch (status) {
            case "Available":
                return 1;
            case "Booked":
                return 0;
            default:
                return 0;
        }
    }

    useEffect(() => {
        dispatch(getRoom(params.idroom));
        if (room) {
            setRoomEdit({
                numroom: room.numroom,
                photos: room.photos,
                type: room.type,
                amenities: room.amenities,
                price: room.price,
                offer: room.offer,
                status: room.status,
                cancellation: room.cancellation
            });
        }
    }, []);

    if (room && roomEdit) {
        return (
            <div>
                <h1>Edit Room Nº{room._id}</h1>
                <input type="number" placeholder="Number" value={roomEdit.numroom} onChange={(e) => setRoomEdit({ ...roomEdit, numroom: e.target.value })}></input>
                <input type="text" placeholder="Photo" value={roomEdit.photos} onChange={(e) => setRoomEdit({ ...roomEdit, photos: e.target.value })}></input>
                <select value={roomEdit.type} onChange={(e) => setRoomEdit({ ...roomEdit, type: e.target.value })}>
                    <option>Single Bed</option>
                    <option>Double Bed</option>
                    <option>Double Superior</option>
                    <option>Suite</option>
                </select>
                <p>amenities</p>
                <input type="text" placeholder="price" value={roomEdit.price} onChange={(e) => setRoomEdit({ ...roomEdit, price: e.target.value })}></input>
                <input type="text" placeholder="offer" value={roomEdit.offer} onChange={(e) => setRoomEdit({ ...roomEdit, offer: e.target.value })}></input>
                <select onChange={(e) => setRoomEdit({ ...roomEdit, status: getStatusNumber(e.target.value) })}>
                    <option>Available</option>
                    <option>Booked</option>
                </select>

                <button onClick={setEditRoom}>Editar habitacion</button>
            </div>
        );
    } else {
        return (
            <p>Habitacion no encontrada</p>
        );
    }
}

export default EditRoom;
