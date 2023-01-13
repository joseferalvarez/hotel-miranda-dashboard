import React, { useState } from 'react';
import { InputText, InputTextArea } from "../Blocks/InputText";
import Button from '../Blocks/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createOneRoom } from '../../actions/actions';

const FormContainer = styled.div`
    background-color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin: auto;
    padding: 5%;
    align-items: center;
    gap: 30px;

    div:last-child{
        width: 70%;
    }
`;

const SelectContainer = styled.div`
    width: 70%;
    display: flex;
    gap: 50px;
`;

const InputContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    textarea{
        margin-top: 20px;
    }
`;

const Select = styled.select`
    background-color: white;
    border-radius: 1px solid #135846;
    color: #135846;
    min-width: 129px;
    border-radius: 8px;
    font-weight: 500;
    font-family: var(--font-poppins);
    padding: 13px 25px;
    height: 50px;
    &:focus{
        outline: none;
    }
`;

const RoomForm = ({ room }) => {

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

    const createRoom = () => {
        createOneRoom(dispatch, roomForm);
        navigate("/rooms");
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
                <InputTextArea type="text" placeholder='Cancellation' value={roomForm.cancellation} onChange={(e) => setRoomForm({ ...roomForm, cancellation: e.target.value })}></InputTextArea>
            </InputContainer>
            <div>
                {room ?
                    <Button type={"create"} text={"Update room"}></Button> :
                    <Button type={"create"} text={"Create new room"} click={() => createRoom()} enabled></Button>}
            </div>
        </FormContainer>
    );
}

export default RoomForm;
