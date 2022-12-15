import React from 'react';
import styled, { css } from 'styled-components';

const SelectStyled = styled.select<{ typeSelect: string }>`
    ${(props) => {
        switch (props.typeSelect) {
            case "green":
                return css`
                    background-color: #135846;
                    color: #FFFFFF;
                `;
            case "white":
                return css`
                    background-color: white;
                    border-radius: 1px solid #135846;
                    color: #135846;
                    width: 129px;
                `;
            default:
                return css`

            `;
        }
    }};
    border-radius: 8px;
    font-weight: 500;
    font-family: var(--font-poppins);
    padding: 13px 25px;
    height: 50px;
    &:focus{
        outline: none;
    }
`;

type PropsSelect = {
    typeSelect: string;
    options: string[] | [];
}

const Select = ({ typeSelect, options }: PropsSelect) => {
    return (
        <SelectStyled typeSelect={typeSelect}>
            {options.map((option: string, index: number) => {
                return (<option key={index}>{option}</option>)
            })}
        </SelectStyled>
    );
}

export default Select;
