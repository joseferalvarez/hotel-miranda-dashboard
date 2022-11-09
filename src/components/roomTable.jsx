import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.th`
    text-align: start;
`;

const RoomNameContainer = styled.div`
        display: flex;
        gap: 28px;
    `;

const RoomId = styled.p`
        color: #799283;
        font-size: 14px;
    `;

const RoomNumber = styled.p`
        color: #393939;
        font-size: 16px;
    `;

const RoomImg = styled.img`
        width: 150px;
        height: 77px;
        object-fit: cover;
    `;

const RoomNameData = styled.div`
        text-align: center;
    `;


const RoomTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <HeaderTitle>Room Name</HeaderTitle>
                    <HeaderTitle>Room Type</HeaderTitle>
                    <HeaderTitle>Amenities</HeaderTitle>
                    <HeaderTitle>Rate</HeaderTitle>
                    <HeaderTitle>Offer Price</HeaderTitle>
                    <HeaderTitle>Status</HeaderTitle>
                </tr>
            </thead>
            <tbody>
                {data.map((obj) => (
                    <tr key={obj.id}>
                        <td>
                            <RoomNameContainer>
                                <RoomImg src={obj.photo} />
                                <RoomNameData>
                                    <RoomId>#{obj.id}</RoomId>
                                    <RoomNumber>{obj.number}</RoomNumber>
                                </RoomNameData>
                            </RoomNameContainer>
                        </td>
                        <td>{obj.type}</td>
                        <td>{obj.amenities.map((amenitie) => (
                            <span>{amenitie}, </span>
                        ))}</td>
                        <td>{obj.price}</td>
                        <td>{obj.offer}</td>
                        <td>{obj.status ? "Available" : "Booked"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RoomTable;
