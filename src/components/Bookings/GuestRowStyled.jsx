import styled, { css } from 'styled-components';

const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    transition: box-shadow 0.2s;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }
`;

const GuestContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    margin-left: 25px;

    img{
        border-radius: 8px;
        width: 45px;
        height: 45px;
        object-fit: cover;
    }
`;

const GuestName = styled.p`
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

const DataContainer = styled.td`
    vertical-align: top;

    p{
        font-family: var(--font-poppins);
        color: #393939;
        font-size: 16px;
        max-width: 300px;
        padding-left: 30px;
    }
`;

const DataContainerButton = styled.td`
    vertical-align: top;
    padding-right: 30px;

    button{
        background-color: transparent;
        border: none;
        margin-left: 60px;
        margin-top: 15px;
        width: 24px;
        height: 24px;
        .icon{
            width: 25px;
            height: 25px;
        }
    }
`;

const DataContainerCheckbox = styled.td`
    vertical-align: middle;
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

export {
    Row,
    GuestContainer,
    GuestName,
    GuestId,
    DataContainer,
    DataContainerButton,
    DataContainerCheckbox,
    Status
};
