/** React */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

/** Redux */
import { useDispatch } from 'react-redux';
import { createOneRoom, updateOneRoom } from '../../actions/actions';

/** Components */
import {
    InputText,
    InputTextArea
} from "../Blocks/InputText";

/** Styles */
import {
    FormContainer,
    FacilitiesContainer,
    Facilitie,
    SelectContainer,
    InputContainer,
} from "../../Styles/Rooms/RoomForm";
import { Select } from "../../Styles/Common/Select";
import Button from '../Blocks/Button';



const RoomForm = ({ room }) => {

    const amenities = ["Air conditioner", "Breakfast", "Cleaning", "Grocery", "Shop near", "High speed WiFi", "Kitchen", "Shower", "Single bed", "Towels"];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [roomForm, setRoomForm] = useState({
        numroom: "",
        photos: "",
        type: "Single Bed",
        amenities: [],
        price: "",
        offer: "",
        status: 0,
        cancellation: ""
    });

    useEffect(() => {
        if (room) {
            setRoomForm({
                numroom: room.numroom,
                photos: room.photos,
                type: room.type,
                amenities: room.amenities,
                price: room.price,
                offer: room.offer,
                status: room.status,
                cancellation: room.cancellation
            })
        };
    }, []);

    const createRoom = () => {
        createOneRoom(dispatch, roomForm);
        navigate("/rooms");
    }

    const editRoom = () => {
        updateOneRoom(dispatch, room._id, roomForm);
        navigate("/rooms");
    }

    const getAmenitie = (amenity) => {
        let exist = false;
        roomForm.amenities.forEach((item) => {
            if (item === amenity) {
                exist = true;
            }
        })

        return exist;
    }

    const addAmenity = (amenity) => {
        setRoomForm({ ...roomForm, amenities: [...roomForm.amenities, amenity] });
    }

    const deleteAmenity = (amenity) => {
        let amenities = roomForm.amenities.filter((item) => item !== amenity);
        setRoomForm({ ...roomForm, amenities: amenities });
    }

    return (
        <FormContainer>
            <SelectContainer>
                <Select value={roomForm.status} onChange={(e) => setRoomForm({ ...roomForm, status: Number(e.target.value) })}>
                    <option value={1}>Available</option>
                    <option value={0}>Booked</option>
                </Select>
                <Select value={roomForm.type} onChange={(e) => setRoomForm({ ...roomForm, type: e.target.value })}>
                    <option>Single Bed</option>
                    <option>Double Bed</option>
                    <option>Double Superior</option>
                    <option>Suite</option>
                </Select>
            </SelectContainer>
            <InputContainer>
                <InputText type="number" placeholder='Room number' value={roomForm.numroom} onChange={(e) => setRoomForm({ ...roomForm, numroom: e.target.value })}></InputText>
                <InputText type="number" placeholder='Room price' value={roomForm.price} onChange={(e) => setRoomForm({ ...roomForm, price: e.target.value })}></InputText>
                <InputText type="number" placeholder='Room offer' value={roomForm.offer} onChange={(e) => setRoomForm({ ...roomForm, offer: e.target.value })}></InputText>
                <InputText type="text" placeholder='Photo URL' value={roomForm.photos} onChange={(e) => setRoomForm({ ...roomForm, photos: [e.target.value] })} />
                <InputTextArea type="text" placeholder='Cancellation' value={roomForm.cancellation} onChange={(e) => setRoomForm({ ...roomForm, cancellation: e.target.value })}></InputTextArea>
            </InputContainer>
            <FacilitiesContainer>
                {amenities.map((amenity, index) => (
                    getAmenitie(amenity) ?
                        <Facilitie key={index} color='#135846' bcolor={"#EBF1EF"} onClick={(e) => deleteAmenity(e.currentTarget.textContent)}>{amenity}</Facilitie> :
                        <Facilitie key={index} color='#E23428' bcolor={"#FFEDEC"} onClick={(e) => addAmenity(e.currentTarget.textContent)}>{amenity}</Facilitie>
                ))}
            </FacilitiesContainer>
            <div>
                {room ?
                    <Button type={"create"} text={"Update room"} click={() => editRoom()}></Button> :
                    <Button type={"create"} text={"Create new room"} click={() => createRoom()} enabled></Button>}
            </div>
        </FormContainer >
    );
}

export default RoomForm;
