import React from 'react';

const RoomTable = (props) => {

    const data = props.data;

    return (
        <table className='room-table'>
            <tr>
                <th>Room Name</th>
                <th>Room Type</th>
                <th>Amenities</th>
                <th>Rate</th>
                <th>Offer Price</th>
                <th>Status</th>
            </tr>
            {data.map((obj) => (
                <tr>
                    <td>{obj.id}</td>
                    <td>{obj.type}</td>
                    <td>{obj.amenities.map((amenitie) => (
                        <span>{amenitie}, </span>
                    ))}</td>
                    <td>{obj.price}</td>
                    <td>{obj.offer}</td>
                    <td>{obj.status ? "Available" : "Booked"}</td>
                </tr>
            ))}

        </table>
    );
}

export default RoomTable;
