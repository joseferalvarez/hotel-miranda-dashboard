import styled from 'styled-components';

const DashboardContainer = styled.div`
    width: 100%;
`;

const CardsView = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    margin: 0 5%;
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    gap: 2%;
    margin: 5% 0;
`;

const CalendarView = styled.div`
    width: 40%;
    background-color: #FFFFFF;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
`;

const StatsView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: #FFFFFF;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
    overflow: scroll;
`;

const SwiperContainer = styled.div`
    margin: auto;
    display: flex;
    margin-top: 50px;
    width: 1300px;
    overflow: hidden;
    padding: 30px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid #00000007;
`;

export { DashboardContainer, CardsView, Info, CalendarView, StatsView, SwiperContainer }
