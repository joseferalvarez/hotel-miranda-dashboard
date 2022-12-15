import React from 'react';
import { useParams } from 'react-router';

const Guest = (): JSX.Element => {

    let params = useParams<string>();

    return (
        <div>
            <h1>guest nº{params.idguest}</h1>
        </div>
    );
}

export default Guest;
