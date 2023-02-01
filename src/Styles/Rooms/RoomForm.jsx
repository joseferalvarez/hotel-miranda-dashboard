import styled from "styled-components";

const FormContainer = styled.div`
    background-color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin: auto;
    padding: 5%;
    align-items: center;
    gap: 30px;

    div:last-child{
        width: 70%;
    }
`;

const FacilitiesContainer = styled.div`
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    gap: 10px;
`;

const Facilitie = styled.p`
    font-family: var(--font-poppins);
    color: ${props => props.color || "blue"};
    background-color: #EBF1EF;
    background-color: ${props => props.bcolor || "blue"};;
    padding: 10px 20px;
    border-radius: 12px;
    user-select: none;
`;

const SelectContainer = styled.div`
    width: 70%;
    display: flex;
    gap: 50px;
`;

const InputContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    textarea{
        margin-top: 20px;
    }
`;

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

export { FormContainer, FacilitiesContainer, Facilitie, SelectContainer, InputContainer, Select }
