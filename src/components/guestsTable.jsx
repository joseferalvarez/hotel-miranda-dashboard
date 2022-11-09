import React from 'react';
import styled, { css } from 'styled-components';
import { BsThreeDotsVertical } from "react-icons/bs";

const Table = styled.table`
    border-collapse: collapse;
`;

const HeaderTitle = styled.th`
    font-family: var(--font-poppins);
    font-weight: 600;
    text-align: start;
    padding: 20px 0 20px 30px;
`;

const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    transition: box-shadow 0.2s;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }
`;

const Checkbox = styled.input`
    width: 24px;
    height: 24px;
`;

const DataContainerCenter = styled.td`
vertical-align: middle;
`;

const GuestContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    margin-left: 25px;
`;

const UserImg = styled.img`
    border-radius: 8px;
    width: 45px;
    height: 45px;
    object-fit: cover;
`;

const UserName = styled.p`
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500px;
    color: #393939;
`;

const GuestId = styled.p`
    color: #799283;
    font-size: 14px;
    font-family: var(--font-poppins);
`;

const GuestText = styled.p`
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 16px;
    max-width: 300px;
    padding-left: 30px;
`;

const NotesButton = styled.button`
    ${(props) => {
        if (props.$enabled) {
            return css`
                background-color: #EEF9F2;
                font-weight: 500;
                border: none;
                color: #212121;
            `;
        } else {
            return css`
                pointer-events: none;
                background-color: #EEF9F2;
                font-weight: 500;
                border: 1px solid #799283;
                color: #799283;
            `;
        }
    }
    }

    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

const Status = styled.p`

    ${(props) => {
        switch (props.$type) {
            case "Check In":
                return css`
                    background-color: #E8FFEE;
                    color: #5AD07A;
            `;
            case "Check Out":
                return css`
                    background-color: #FFEDEC;
                    color: #E23428;
            `;
            case "In Progress":
                return css`
                    background-color: #fbfcc2;
                    color: #ffbb00;
            `;
            default:
                return css`
                background-color: blue;
                color: white;
        `;
        }
    }
    }
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
    `;

const DataContainer = styled.td`
vertical-align: top;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 60px;
    margin-top: 15px;
    width: 24px;
    height: 24px;
`;

const GuestsTable = (props) => {
    return (
        <Table>
            <tr>
                <HeaderTitle></HeaderTitle>
                <HeaderTitle>Guest</HeaderTitle>
                <HeaderTitle>Order Date</HeaderTitle>
                <HeaderTitle>Check In</HeaderTitle>
                <HeaderTitle>Check Out</HeaderTitle>
                <HeaderTitle>Special Request</HeaderTitle>
                <HeaderTitle>Room Type</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
            </tr>
            {props.data.map((obj) => (
                <Row>
                    <DataContainerCenter><Checkbox type="checkbox"></Checkbox></DataContainerCenter>
                    <td>
                        <GuestContainer>
                            <UserImg src={obj.photo} alt='' />
                            <div>
                                <UserName>{obj.name}</UserName>
                                <GuestId>#{obj.id}</GuestId>
                            </div>
                        </GuestContainer>
                    </td>
                    <DataContainer>
                        <GuestText>{obj.order}</GuestText>
                    </DataContainer>
                    <DataContainer>
                        <GuestText>{obj.checkin}</GuestText>
                    </DataContainer>
                    <DataContainer>
                        <GuestText>{obj.checkout}</GuestText>
                    </DataContainer>
                    <td><NotesButton $enabled={obj.description}>View Notes</NotesButton></td>
                    <DataContainer>
                        <GuestText>{obj.typeroom} - {obj.numroom}</GuestText>
                    </DataContainer>
                    <td>
                        <Status $type={obj.state}>{obj.state}</Status>
                    </td>
                    <DataContainer>
                        <Button><BsThreeDotsVertical /></Button>
                    </DataContainer>
                </Row>
            ))}
        </Table>
    );
}

export default GuestsTable;
