import styled from 'styled-components';

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
`;

const LogoIcon = styled.div`
overflow: hidden;
    width: 80px;
    height: 80px;
    box-shadow: 0px 14px 24px 0px rgba(139, 139, 139, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoLetter = styled.p`
overflow: hidden;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: var(--font-poppins);
`;

export {
    LogoStyled,
    LogoIcon,
    LogoLetter
}
