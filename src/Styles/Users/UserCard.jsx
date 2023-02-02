import styled from "styled-components";

const UserContainer = styled.div`
    width: 100%;

`;

const UserCard = styled.div`
    width: 60%;
    margin: auto;
    background-color: white;
    border-radius: 12px;
    margin-top: 100px;

    div:first-child{
        display: flex;
    }

    div:last-child{
        display: flex;
        flex-direction: column;
    }
`;

const Image = styled.div`
    margin: 5%;
    width: 40%;
    border-radius: 12px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
`;

const DataPrimary = styled.div`
    display: flex;
    margin: 5% 0;
    width: 45%;
    p{
        font-family: var(--font-poppins);
    }
`;

const UserName = styled.p`
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 25px;
`;

const UserId = styled.p`
    font-size: 14px;
    color: #799283;
    font-family: var(--font-poppins);
`;

const UserStatus = styled.p`
    color: ${props => props.status || "blue"};
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 600;
`;

const DataSecondary = styled.div`
    p{
        font-family: var(--font-poppins);
        font-weight: 500;
        color: #393939;
    }
`;

const Icon = styled.div`
    font-size: 20px;
    color: #135846;
`;

const DataText = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 5%;
`;

export {
    UserContainer,
    UserCard,
    Image,
    DataPrimary,
    UserName,
    UserId,
    UserStatus,
    DataSecondary,
    Icon,
    DataText
}
