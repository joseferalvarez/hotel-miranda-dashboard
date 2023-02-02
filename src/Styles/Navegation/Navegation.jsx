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
    top: 45px;
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
    padding-bottom: 10px;
    overflow: hidden;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    overflow: hidden;
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
    border-radius: 6px;
    align-items: center;
    gap: 20px;
    transition: all 0.2s;

    &:hover p,
    &:hover .icon{
        color: #E23428;
    }

    div{
        margin-right: 15%;
        transition: background-color 0.2s;
        width: 8px;
        height: 100%;
        background-color: ${props => {
        if (props.route === props.current) {
            return "#E23428";
        } else {
            return "#FFFFFF";
        }
    }};
        border-radius: 0 8px 8px 0;
    }

    p {
        color: ${props => {
        if (props.route === props.current) {
            return "#E23428";
        } else {
            return "#799283";
        }
    }};
        font-family: var(--font-poppins);
        font-size: 18px;
        text-decoration: none;
    }

    .icon{
        color: ${props => {
        if (props.route === props.current) {
            return "#E23428";
        } else {
            return "#799283";
        }
    }};
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
    LogoContainer,
    Navigation,
    UserCard,
    NavigationDescription,
    NavigationRights,
    NavigationAuthor,
    Link
};
