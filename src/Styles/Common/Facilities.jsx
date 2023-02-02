import styled from "styled-components";

const FacilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Facilitie = styled.p`
    font-family: var(--font-poppins);
    color: #135846;
    background-color: #EBF1EF;
    padding: 14px 40px;
    border-radius: 12px;
`;

export {
    FacilitiesContainer,
    Facilitie
}
