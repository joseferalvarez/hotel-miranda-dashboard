import styled from "styled-components";

const Table = styled.table`
    border-collapse: collapse;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
`;

const HeaderTitle = styled.th`
    font-family: var(--font-poppins);
    font-weight: 600;
    text-align: start;
    padding: 20px 0 20px 30px;
`;

const Checkbox = styled.div`
    display: block;
    position: relative;

    .checkbox-input,
    .checkbox{
        width: 24px;
        height: 24px;
    }

    .checkbox-input {
        position: absolute;
        opacity: 0;
        z-index: 1;

        &:checked + label .checkbox {
            border: 2px solid #135846;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .checkbox {
        border: 2px solid #707070;
        border-radius: 3px;
        display: inline-block;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 20px;
            height: 20px;
            background-color: #135846;
            border-radius: 3px;
            transition: 0.2s;
        }
    }
`;

export { Table, HeaderTitle, Checkbox };
