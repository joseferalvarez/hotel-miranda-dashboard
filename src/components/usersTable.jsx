import React from 'react';

const UsersTable = (props) => {
    return (
        <table className='users-table'>
            <tr>
                <th>Name</th>
                <th>Job Desk</th>
                <th>Contact</th>
                <th>Status</th>
            </tr>


            {props.data.map((obj) => (
                <tr>

                    <td>
                        <div>
                            <img src={obj.photo} alt="" />
                            <div>
                                <p>{obj.name}</p>
                                <p>{obj.id}</p>
                                <p>Joined on {obj.date}</p>
                            </div>
                        </div>
                    </td>

                    <td>{obj.description}</td>

                    <td>
                        <p>{obj.phone}</p>
                        <p>{obj.email}</p>
                    </td>

                    <td>{obj.state ? "ACTIVE" : "INACTIVE"}</td>
                </tr>
            ))}
        </table>
    );
}

export default UsersTable;
