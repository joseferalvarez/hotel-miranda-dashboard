import styled from "styled-components";

const Row = styled.tr`
    border-top: 1px solid #D4D4D4;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }

    td{
        font-family: var(--font-poppins);
        color: #393939;
        width: 15%;
        padding-left: 30px;
    }

    td:nth-child(4){
        width: 45%;

        p:first-child{
            font-weight: 600;
        }
    }

    button{
        font-family: var(--font-poppins);
        font-size: 16px;
        border: none;
        background-color: transparent;
        color: #E23428;
    }
`;

export { Row }
