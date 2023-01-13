import React from 'react';
import RoomForm from '../../components/Rooms/RoomForm';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    height: 100%;
`;

const NewRoom = () => {
    return (
        <FormContainer>
            <RoomForm></RoomForm>
        </FormContainer>
    );
}

export default NewRoom;
