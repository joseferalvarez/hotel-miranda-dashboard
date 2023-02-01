import styled from "styled-components";

const Table = styled.table`
    font-family: var(--font-poppins);
    border-collapse: collapse;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
`;

const HeaderTitle = styled.th`
    font-weight: 600;
    text-align: start;
    padding: 20px 0 20px 30px;
`;

const TableButtons = styled.div`
    display: flex;
    width: 40%;
    margin-left: 50px;
    justify-content: flex-end;
    gap: 20px;
`;

export {
    Table,
    HeaderTitle,
    TableButtons
}
