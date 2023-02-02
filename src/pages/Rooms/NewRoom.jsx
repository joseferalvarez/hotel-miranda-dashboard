/** React */
import React from 'react';

/**Components */
import RoomForm from '../../components/Rooms/RoomForm';

/**Styles */
import { ViewForm } from '../../Styles/Common/ViewContainer';

/**Component */
const NewRoom = () => {
    return (
        <ViewForm>
            <RoomForm></RoomForm>
        </ViewForm>
    );
}

export default NewRoom;
