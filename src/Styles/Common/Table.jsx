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

const TableTools = styled.div`
    display: flex;
`;

const FilterTable = styled.div`
    display: flex;
    width: 60%;
    margin-bottom: 50px;
`;

const FilterButton = styled.button`
    font-family: var(--font-poppins);
    color: #6E6E6E;
    font-weight: 500;
    padding: 12px 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #D4D4D4;

    &:focus{
        color: #135846;
        border-bottom: 2px solid #135846;
        outline: none;
    }
`;

export {
    Table,
    HeaderTitle,
    TableButtons,
    TableTools,
    FilterTable,
    FilterButton
}
