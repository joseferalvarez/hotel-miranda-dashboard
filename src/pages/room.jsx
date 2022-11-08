import React from 'react';
import { useParams } from 'react-router';

const Room = () => {
    let params = useParams();

    return (
        <div>
            <h1>room nº{params.idroom}</h1>
        </div>
    );
}

export default Room;
