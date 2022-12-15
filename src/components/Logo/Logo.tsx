import React from 'react';
import {
    LogoStyled,
    LogoIcon,
    LogoLetter
} from './LogoStyled';

import WordMark from './WordMark';

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
