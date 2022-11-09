import React from 'react';
import styled from 'styled-components';
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
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
    margin-top: 20px;
`;

const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

const UserImg = styled.img`
    border-radius: 8px;
    width: 88px;
    height: 88px;
    object-fit: cover;
`;

const UserNameDesc = styled.p`
    color: #393939;
    font-size: 14px;
    font-family: var(--font-poppins);
`;

const UserNameData = styled.p`
    font-family: var(--font-poppins);
    font-weight: 500;
    color: #393939;
    font-size: 16px;
`;

const UserText = styled.p`
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 16px;
    max-width: 300px;
    padding-left: 30px;
`;

const UserStatus = styled.p`
    color: ${props => props.status || "blue"};
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-left: 30px;
`;

const UserContact = styled.p`
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 14px;
`;

const UserContactData = styled.span`
    margin-left: 10px;
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

const UsersTable = (props) => {
    return (
        <Table>
            <tr>
                <HeaderTitle></HeaderTitle>
                <HeaderTitle>Name</HeaderTitle>
                <HeaderTitle>Job Desk</HeaderTitle>
                <HeaderTitle>Contact</HeaderTitle>
                <HeaderTitle>Status</HeaderTitle>
                <HeaderTitle></HeaderTitle>
            </tr>


            {props.data.map((obj) => (
                <Row>
                    <DataContainer><Checkbox type="checkbox"></Checkbox></DataContainer>
                    <td>
                        <UserNameContainer>
                            <UserImg src={obj.photo} alt="" />
                            <div>
                                <UserNameData>{obj.name}</UserNameData>
                                <UserNameDesc>#{obj.id}</UserNameDesc>
                                <UserNameDesc>Joined on {obj.date}</UserNameDesc>
                            </div>
                        </UserNameContainer>
                    </td>

                    <DataContainer>
                        <UserText>{obj.description}</UserText>
                    </DataContainer>

                    <DataContainer>
                        <UserContact>
                            <HiOutlinePhone />
                            <UserContactData>{obj.phone}</UserContactData>
                        </UserContact>
                        <UserContact>
                            <HiOutlineMail />
                            <UserContactData>{obj.email}</UserContactData>
                        </UserContact>
                    </DataContainer>

                    <DataContainer>
                        <UserStatus status={obj.state ? "#5AD07A" : "#E23428"}>{obj.state ? "ACTIVE" : "INACTIVE"}</UserStatus>
                    </DataContainer>
                    <DataContainer>
                        <Button><BsThreeDotsVertical /></Button>
                    </DataContainer>
                </Row>
            ))}
        </Table>
    );
}

export default UsersTable;
