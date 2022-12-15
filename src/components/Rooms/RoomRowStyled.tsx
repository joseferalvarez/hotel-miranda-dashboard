import styled from 'styled-components';

const Row = styled.tr<{ opacity: number }>`
    opacity: ${props => props.opacity || 1};
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
    font-family: var(--font-poppins);
`;

const RoomNumber = styled.p`
    font-family: var(--font-poppins);
    font-weight: 500;
    color: #393939;
`;

const DataContainer = styled.td`
    vertical-align: bottom;
`;

const DataContainerButton = styled.div`
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
    font-family: var(--font-poppins);
    padding-left: 30px;
    max-width: 300px;
    font-weight: 500;
    color: #393939;
`;

const RoomPrice = styled.p`
    font-family: var(--font-poppins);
    padding-left: 30px;
    max-width: 300px;
    font-weight: 600;
    color: #212121;
    span{
        font-size: 14px;
        color: #799283;
    }
`;


const RoomStatus = styled.p<{ status: string }>`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

const DropDown = styled.div`
    display: block;
    position: absolute;
    background-color: white;
    top: 90%;
    left: 0%;
    z-index: 2;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            text-decoration: none;
            button{
                margin: 0;
                width:100%;
                padding: 10px 15px;
                display: block;
                border: 1px solid #D4D4D4;
                font-family: var(--font-poppins);
                &:hover{
                    background-color: #EBF1EF;
                }
            }
        }
    }
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
    RoomStatus,
    DropDown
}
