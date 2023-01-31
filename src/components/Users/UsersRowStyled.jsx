import styled from 'styled-components';

const Row = styled.tr`
    border-bottom: 1px solid #D4D4D4;
    border-top: 1px solid #D4D4D4;
    transition: box-shadow 0.2s;

    &:hover{
        box-shadow: 0px 4px 30px #00000014;
    }

    .data,
    .user__data{
        font-family: var(--font-poppins);
        color: #393939;
    }
`;

const DataContainer = styled.td`
    vertical-align: top;

    .data{
        &__description{
            max-width: 300px;
            padding-left: 30px;
        }

        &__contact{
            color: #212121;
            font-weight: 600;
            font-size: 14px;
            padding-left: 30px;
            span{
                margin-left: 10px;
            }
        }
    }


`;

const DataContainerButton = styled.div`
    vertical-align: top;
    padding-right: 30px;
    position: relative;
    button{
        background-color: transparent;
        border: none;
        margin-left: 60px;
        margin-top: 15px;
        &:focus{
            outline: none;
        }
        .icon{
            width: 25px;
            height: 25px;
        }
    }
`;

const CheckboxContainer = styled.div`
    display: block;
    margin-top: 20px;
    padding-left: 30px;
`;

const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    margin-left: 30px;

    img{
        border-radius: 8px;
        width: 88px;
        height: 88px;
        object-fit: cover;
    }
`;

const UserName = styled.p`
    font-weight: 500;
`;

const UserData = styled.p`
    font-size: 14px;
`;

const UserStatus = styled.p`
    color: ${props => props.status || "blue"};
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
`;

const DropDown = styled.div`
    display: block;
    position: absolute;
    background-color: white;
    top: 90%;
    left: 0%;
    z-index: 2;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            text-decoration: none;
            button{
                margin: 0;
                width:100%;
                padding: 10px 15px;
                display: block;
                border: 1px solid #D4D4D4;
                font-family: var(--font-poppins);
                &:hover{
                    background-color: #EBF1EF;
                }
            }
        }
    }
`;

export {
    Row,
    DataContainer,
    DataContainerButton,
    CheckboxContainer,
    UserNameContainer,
    UserName,
    UserData,
    UserStatus,
    DropDown
}
