import styled, { css } from "styled-components";

const Contact = styled.div`
    width: 430px;
    height: 275px;
    background-color: #FFFFFF;
    border-radius: 20px;
    position: relative;
    box-shadow: 5px 5px 5px #00000008;
    margin: 10px;

    .button{
        position: absolute;
        bottom: 5px;
        right: 15px;
        background-color: transparent;
        border: none;
        font-size: 24px;
        color: #5AD07A;
    }
`;

const Comment = styled.p`
    ${(props) => {
        if (props.big) {
            return css`
                overflow: scroll;
                height: 100%;
            `;
        } else {
            return css`
                overflow: hidden;
                text-overflow: ellipsis;
                height: 100px;
            `;
        }
    }}
    transition: all 0.3s;
    font-family: var(--font-poppins);
    color: #4E4E4E;
    padding: 5%;
`;
const User = styled.div`
    ${(props) => {
        if (props.big) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: flex;
            `;
        }
    }}

    padding: 5%;
`;

const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;

    p{
        margin: 5px;
    }

    p:first-child{
        font-family: var(--font-poppins);
        font-weight: 600;
        color: #262626;
    }

    p:last-child{
        font-family: var(--font-poppins);
        color: #799283;
    }
`;

const Buttons = styled.div`
    display: flex;
    button{
        background-color: transparent;
        border: none;
        font-size: 24px;
    }
    button:first-child{
        color: #5AD07A;
    }
    button:last-child{
        color: #E23428;
    }
`;

export {
    Contact,
    Comment,
    User,
    Data,
    Buttons
}
