import React from 'react';
import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoaderSpinner = () => {
    return (
        <SpinnerContainer>
            <BounceLoader size={200} color='#135846' speedMultiplier={0.8}></BounceLoader>
        </SpinnerContainer>
    );
}

export default LoaderSpinner;
