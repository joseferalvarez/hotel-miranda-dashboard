import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createNewUser } from '../../features/sliceUsers';

const NewUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        photo: "",
        position: "Manager",
        email: "",
        phone: "",
        date: "",
        description: "",
        status: 1,
        pass: ""
    });

    const createUser = () => {
        dispatch(createNewUser(user));
        navigate("/users");
    }

    const getStatusNumber = (status) => {
        switch (status) {
            case "Active":
                return 1;
            case "Inactive":
                return 0;
            default:
                return 0;
        }
    }

    return (
        <div>
            <h1>newuser</h1>
            <input type="text" placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
            <input type="text" placeholder="Photo" value={user.photo} onChange={(e) => setUser({ ...user, photo: e.target.value })}></input>
            <select value={user.position} onChange={(e) => setUser({ ...user, position: e.target.value })}>
                <option>Manager</option>
                <option>Room service</option>
                <option>Reception</option>
            </select>
            <input type="text" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
            <input type="text" placeholder="Phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })}></input>
            <input type="date" value={user.date} onChange={(e) => setUser({ ...user, date: e.target.value })}></input>
            <input type="text" placeholder="Description" value={user.description} onChange={(e) => setUser({ ...user, description: e.target.value })}></input>
            <select onChange={(e) => setUser({ ...user, status: getStatusNumber(e.target.value) })}>
                <option>Active</option>
                <option>Inactive</option>
            </select>
            <input type="password" placeholder="Password" value={user.pass} onChange={(e) => setUser({ ...user, pass: e.target.value })}></input>

            <button onClick={createUser}>crear usuario</button>
        </div>
    );
}

export default NewUser;
