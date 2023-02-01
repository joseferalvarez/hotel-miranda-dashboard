import styled from "styled-components";

const Select = styled.select`
    background-color: white;
    border-radius: 1px solid #135846;
    color: #135846;
    min-width: 129px;
    border-radius: 8px;
    font-weight: 500;
    font-family: var(--font-poppins);
    padding: 13px 25px;
    height: 50px;
    &:focus{
        outline: none;
    }
`;

export { Select };
