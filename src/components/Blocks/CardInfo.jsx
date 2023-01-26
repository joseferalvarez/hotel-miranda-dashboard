import React from 'react';
import styled from 'styled-components';
import { BiBed } from "react-icons/bi";

const Card = styled.div`
    width: 20%;
    height: 100px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    font-family: var(--font-poppins);

    p:first-child{
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }

    p:last-child{
        font-size: 14px;
        color: #787878;
        margin: 0;
    }
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin: 0 30px;
`;

const CardInfo = ({ data }) => {
    return (
        <Card>
            <div>
                <Icon>
                    <BiBed />
                </Icon>
            </div>
            <div>
                <p>8170</p>
                <p>New Booking</p>
            </div>
        </Card>
    );
}

export default CardInfo;
