import styled from 'styled-components';

const DashboardContainer = styled.div`
    width: 100%;
    margin-left: 20px;
`;
const CardsView = styled.div`
    display: flex;
    gap: 5%;
    margin: 0 5%;
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
`;

export {
    DashboardContainer,
    CardsView,
    CalendarView,
    StatsView
}
