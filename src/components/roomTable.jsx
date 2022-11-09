import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
`;

const HeaderTitle = styled.th`
    font-family: var(--font-poppins);
    font-weight: 600;
    text-align: start;
    padding-left: 30px;
`;

const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
`;

const RoomNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

const RoomId = styled.p`
    color: #799283;
    font-size: 14px;
    font-family: var(--font-poppins);
`;

const RoomNumber = styled.p`
    font-family: var(--font-poppins);
    font-weight: 500;
    color: #393939;
    font-size: 16px;
`;

const RoomText = styled.p`
    font-family: var(--font-poppins);
    font-weight: 500;
    color: #393939;
    font-size: 16px;
    max-width: 300px;
    padding-left: 30px;
`;

const RoomPrice = styled.p`
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #212121;
    font-size: 16px;
    max-width: 300px;
    padding-left: 30px;
`;

const RoomPriceSpan = styled.span`
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #799283;
    font-size: 14px;
`;

const RoomImg = styled.img`
    border-radius: 8px;
    width: 150px;
    height: 77px;
    object-fit: cover;
`;

const RoomNameData = styled.div`
    text-align: center;
`;

const RoomStatus = styled.p`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

const DataContainer = styled.td`
vertical-align: bottom;
`;

const RoomTable = ({ data }) => {
    return (
        <Table>
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
                    <Row key={obj.id}>
                        <td>
                            <RoomNameContainer>
                                <RoomImg src={obj.photo} />
                                <RoomNameData>
                                    <RoomId>#{obj.id}</RoomId>
                                    <RoomNumber>{obj.number}</RoomNumber>
                                </RoomNameData>
                            </RoomNameContainer>
                        </td>
                        <DataContainer>
                            <RoomText>{obj.type}</RoomText>
                        </DataContainer>
                        <DataContainer>
                            <RoomText>{obj.amenities.map((amenitie) => (
                                <span>{amenitie}, </span>
                            ))}</RoomText>
                        </DataContainer>
                        <DataContainer>
                            <RoomPrice>${obj.price}<RoomPriceSpan>/night</RoomPriceSpan></RoomPrice>
                        </DataContainer>
                        <DataContainer>
                            <RoomPrice>${obj.offer}<RoomPriceSpan>/night</RoomPriceSpan></RoomPrice>
                        </DataContainer>
                        <td><RoomStatus status={obj.status ? "#5AD07A" : "#E23428"}>{obj.status ? "Available" : "Booked"}</RoomStatus></td>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
}

export default RoomTable;
