/**React */
import React from 'react';
/**Component */
import WordMark from './WordMark';
/**Styles */
import {
    LogoStyled,
    LogoIcon,
    LogoLetter
} from '../../Styles/Logo/Logo';

const Logo = () => {
    return (
        <LogoStyled>
            <LogoIcon>
                <LogoLetter>H</LogoLetter>
            </LogoIcon>
            <WordMark></WordMark>
        </LogoStyled>
    );
}

export default Logo;
