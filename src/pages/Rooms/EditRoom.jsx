/**React */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getOneRoom, resetRoom } from '../../actions/actions';

/**Components */
import RoomForm from '../../components/Rooms/RoomForm';

/**Views */
import { ViewForm } from '../../Styles/Common/ViewContainer';

/**Component */
const EditRoom = () => {

    /**States */
    const { room } = useSelector((state) => state.roomsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    /**GET the room from the backend */
    useEffect(() => {
        if (room) {
            resetRoom(dispatch);
        }
        getOneRoom(dispatch, params.idroom);
    }, []);

    /**HTML */
    if (room) {
        return (
            <ViewForm>
                <RoomForm room={room}></RoomForm>
            </ViewForm>
        );
    } else {
        return (
            <></>
        );
    }
}

export default EditRoom;
