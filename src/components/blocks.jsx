import styled from "styled-components";

const Table = styled.table`
    border-collapse: collapse;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;

    .checkbox{
        width: 24px;
        height: 24px;
    }
`;

const HeaderTitle = styled.th`
    font-family: var(--font-poppins);
    font-weight: 600;
    text-align: start;
    padding: 20px 0 20px 30px;
`;

export { Table, HeaderTitle };
