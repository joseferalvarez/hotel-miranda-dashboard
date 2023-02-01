import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneRoom, resetRoom } from '../../actions/actions';
import RoomForm from '../../components/Rooms/RoomForm';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;

const EditRoom = () => {
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.roomsReducer);
    const params = useParams();

    useEffect(() => {
        resetRoom(dispatch);
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
            <></>
        );
    }
}

export default EditRoom;
