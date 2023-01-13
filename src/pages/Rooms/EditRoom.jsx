import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getOneRoom } from '../../actions/actions';
import RoomForm from '../../components/Rooms/RoomForm';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    height: 100%;
`;

const EditRoom = () => {
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.roomsReducer);
    const params = useParams();
    const navigate = useNavigate();

    /*  const setEditRoom = () => {
         updateOneRoom(dispatch, room._id, roomEdit);
         navigate("/rooms");
     } */

    useEffect(() => {
        getOneRoom(dispatch, params.idroom);
    }, []);

    if (room) {
        return (
            <FormContainer>
                <RoomForm room={room}></RoomForm>
            </FormContainer>
        );
    } else {
        return (
            <p>Habitacion no encontrada</p>
        );
    }
}

export default EditRoom;
