import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from "react-icons/ai";

const TopbarContainer = styled.div`

    button{
        background-color: transparent;
        border: none;
        width: 25px;
        height: 25px;

        &:focus{
            outline: none;
        }
    }
    .arrow{
        transform: ${props => props.displaynav ? "rotate(180deg)" : "" || ""};
        transition: transform 0.3s;
        width: 25px;
        height: 25px;
    }
`;

const Topbar = ({ title }) => {

    const [displayNav, setDisplayNav] = useState(false);

    const display = () => {
        if (displayNav) {
            setDisplayNav(false);
        } else {
            setDisplayNav(true);
        }
    }

    return (
        <TopbarContainer displaynav={displayNav}>
            <button onClick={display}><AiOutlineArrowRight className='arrow'></AiOutlineArrowRight></button>
            <p>{title}</p>
        </TopbarContainer>
    );
}

export default Topbar;
