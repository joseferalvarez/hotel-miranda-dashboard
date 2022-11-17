import styled from 'styled-components';

const NavContainer = styled.div`
    width: ${props => props.display};
    box-shadow: 13px 3px 40px #00000005;
    background-color: #FFFFFF;
    transition: width 0.3s;
    overflow: visible;
    position: relative;
`;

const ArrowButton = styled.button`
    position: absolute;
    right: -50px;
    top: 35px;
    background-color: transparent;
    border: none;
    width: 25px;
    height: 25px;

    &:focus{
        outline: none;
    }

    .arrow{
        width: 25px;
        height: 25px;
    }
`;

const UserCard = styled.div`
    margin-left: 15%;
    overflow: hidden;
`;

const Logo = styled.div`
    width: 70%;
    padding: 5% 15%;
    display: flex;
    align-items: center;
    gap: 15px;
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

const Navigation = styled.nav`
overflow: hidden;
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        a{
            text-decoration: none;
        }
    }
`;

const Link = styled.li`
    width: 70%;
    display: flex;
    height: 70px;
    border-left: 8px solid white;
    border-radius: 6px;
    align-items: center;
    gap: 20px;
    padding-left: 15%;
    transition: all 0.3s;

    &:hover{
        border-left: 8px solid #E23428;
        p,
        .icon{
            color: #E23428;
        }
    }

    p {
        color: #799283;
        font-family: var(--font-poppins);
        font-size: 18px;
        text-decoration: none;
    }

    .icon{
        color: #799283;
        width: 20px;
        height: 20px;
    }
`;

const NavigationDescription = styled.p`
    padding-left: 15%;
    overflow: hidden;
    font-family: var(--font-poppins);
    font-weight: 600;
    color: #212121;
`;

const NavigationRights = styled.p`
    padding-left: 15%;
    overflow: hidden;
    color: #799283;
    font-size: 14px;
`;

const NavigationAuthor = styled.p`
    padding-left: 15%;
    overflow: hidden;
    color: #799283;
    font-size: 14px;
    margin-top: 30px;
`;

export {
    NavContainer,
    ArrowButton,
    Logo,
    LogoIcon,
    LogoLetter,
    Navigation,
    UserCard,
    NavigationDescription,
    NavigationRights,
    NavigationAuthor,
    Link
};
