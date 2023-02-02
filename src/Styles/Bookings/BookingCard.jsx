import styled from "styled-components";

const BookingContainer = styled.div`
    padding: 2% 5%;
    display: flex;
    justify-content: center;
`;

const BookingCard = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    width: 100%;

    hr{
        background-color: #EBEBEB;
        border: none;
        height: 2px;
        margin: 5% 10%;
    }
`;

const Data = styled.div`
    width: 100%;
    font-family: var(--font-poppins);
`;

const User = styled.div`
    margin-left: 10%;
    p:first-child{
        font-size: 30px;
        font-weight: 600;
    }
    p:nth-child(2n){
        font-size: 14px;
        color: #799283;
    }
`;

const DateCheck = styled.div`
    margin-left: 10%;
    display: flex;
    gap: 10%;

    p:first-child{
        font-size: 14px;
        color: #6E6E6E;
    }
`;

const InfoRoom = styled.div`
    margin-left: 10%;
    display: flex;
    gap: 10%;

    p:first-child, span{
        font-size: 14px;
        color: #6E6E6E;
    }

    p:last-child{
        font-size: 20px;
    }
`;

const DescRoom = styled.div`
    margin-left: 10%;
    font-size: 14px;
`;
const FacilitiesRoom = styled.div`
    margin: 7% 0 0 10%;
`;

const Slider = styled.div`
    width: 700px;
`;

export {
    BookingContainer,
    BookingCard,
    Data,
    User,
    DateCheck,
    InfoRoom,
    DescRoom,
    FacilitiesRoom,
    Slider
}
