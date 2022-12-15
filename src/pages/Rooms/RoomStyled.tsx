import styled from 'styled-components';

const RoomContainer = styled.div`
    display: flex;
    background-color: #FFFFFF;
    margin: 2% 5%;
    border-radius: 12px;
`;
const DataContainer = styled.div`
    width: 40%;
    padding: 3% 5% 3% 5%;

    hr{
        border: 1px solid #D4D4D4;
        border-radius: 50%;
    }
`;

const StateContainer = styled.div`
    display: flex;

    div:nth-child(2n){
        display: block;
        margin-left: 25%;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    gap: 20%;
`;

const Rate = styled.p`
    color: #212121;
    font-family: var(--font-poppins);
    font-weight: 600;
    font-size: 24px;
    span{
        color: #799283;
        font-weight: 400;
        font-size: 14px;
    }
`;

const Subtitle = styled.p`
    color: #6E6E6E;
    font-family: var(--font-poppins);
    font-size: 14px;
`;

const RoomNumber = styled.h1`
    color: #212121;
    font-weight: 600;
    font-family: var(--font-poppins);
`;

const RoomId = styled.p`
    color: #799283;
    font-family: var(--font-poppins);
    font-size: 14px;
`;

const RoomState = styled.p<{ status: string }>`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
    width: 125px;
`;

const RoomType = styled.p`
    color: #393939;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-weight: 500;
`;

const FacilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Facilitie = styled.p`
    font-family: var(--font-poppins);
    color: #135846;
    background-color: #EBF1EF;
    padding: 14px 40px;
    border-radius: 12px;
`;

const PhotoContainer = styled.div`
    width: 50%;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 0 12px 12px 0;
    }
`;

export {
    RoomContainer,
    DataContainer,
    StateContainer,
    PriceContainer,
    Rate,
    Subtitle,
    RoomNumber,
    RoomId,
    RoomState,
    RoomType,
    FacilitiesContainer,
    Facilitie,
    PhotoContainer
}
