/**React */
import React from 'react';
/**Styles */
import { StyledButton } from "../../Styles/Common/Button";

/**Component */
const Button = ({ type, text, enabled, click }) => {
    return (
        <StyledButton $type={type} $enabled={enabled} onClick={click}>{text}</StyledButton>
    );
}

export default Button;
