import styled from "styled-components";

const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    transition: box-shadow 0.2s;
    width: 100%;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }
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

export { Row, DropDown };
