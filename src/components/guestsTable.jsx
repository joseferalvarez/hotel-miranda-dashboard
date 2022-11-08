import React from 'react';

const GuestsTable = (props) => {
    return (
        <table className='guests-table'>
            <tr>
                <th>Guest</th>
                <th>Order Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Special Request</th>
                <th>Room Type</th>
                <th>Status</th>
            </tr>
            {props.data.map((obj) => (
                <tr>
                    <td>
                        <div>
                            <img src={obj.photo} alt='' />
                            <div>
                                <p>{obj.name}</p>
                                <p>{obj.id}</p>
                            </div>
                        </div>
                    </td>
                    <td>{obj.order}</td>
                    <td>{obj.checkin}</td>
                    <td>{obj.checkout}</td>
                    <td>View Notes</td>
                    <td>{obj.typeroom} - {obj.numroom}</td>
                    <td>{obj.state}</td>
                </tr>
            ))}
        </table>
    );
}

export default GuestsTable;
