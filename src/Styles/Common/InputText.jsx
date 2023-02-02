import styled from "styled-components";

const InputText = styled.input`
    transition: all 0.1s;
    display: block;
    font-family: var(--font-poppins);
    font-size: 1.1rem;
    border: none;
    border-bottom: 1px solid #C5C5C5;
    border-radius: 2px 2px 0 0;
    width: 100%;

    &:hover{
        border-bottom: 1px solid #135846;
    }
    &:hover~div .input-icon{
        color: #135846;
    }

    &:focus{
        outline: none;
        border-bottom: 1px solid #135846;
    }

    &:focus~div .input-icon{
        color: #135846;
    }
`;

const InputTextArea = styled.textarea`
    transition: all 0.1s;
    display: block;
    font-family: var(--font-poppins);
    font-size: 1.1rem;
    border: none;
    border: 1px solid #C5C5C5;
    border-radius: 8px;
    resize: none;
    width: 100%;
    height: 150px;

    &:hover{
        border: 1px solid #135846;
    }
    &:hover~div .input-icon{
        color: #135846;
    }

    &:focus{
        outline: none;
        border-bottom: 1px solid #135846;
    }

    &:focus~div .input-icon{
        color: #135846;
    }
`;

export {
    InputText,
    InputTextArea
};
