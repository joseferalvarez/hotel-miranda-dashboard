import styled from 'styled-components';

const Row = styled.tr`
    border-top: 1px solid #D4D4D4;
    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }
`;

const RoomNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    padding-left: 30px;

    img{
        border-radius: 8px;
        width: 150px;
        height: 77px;
        object-fit: cover;
    }

    div{
        text-align: center;
    }
`;

const RoomId = styled.p`
    font-size: 14px;
    color: #799283;
`;

const RoomNumber = styled.p`
    font-weight: 500;
    color: #393939;
`;

const DataContainer = styled.td`
    vertical-align: bottom;
`;

const DataContainerButton = styled.td`
    vertical-align: top;
    padding-right: 30px;
    position: relative;
    button{
        background-color: transparent;
        border: none;
        margin-left: 60px;
        margin-top: 15px;
        &:focus{
            outline: none;
        }
        .icon{
            width: 25px;
            height: 25px;
        }
    }
`;

const RoomText = styled.p`
    padding-left: 30px;
    max-width: 300px;
    font-weight: 500;
    color: #393939;
`;

const RoomPrice = styled.p`
    padding-left: 30px;
    max-width: 300px;
    font-weight: 600;
    color: #212121;
    span{
        font-size: 14px;
        color: #799283;
    }
`;


const RoomStatus = styled.p`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

export {
    Row,
    RoomNameContainer,
    RoomId,
    RoomNumber,
    DataContainer,
    DataContainerButton,
    RoomText,
    RoomPrice,
    RoomStatus
}
