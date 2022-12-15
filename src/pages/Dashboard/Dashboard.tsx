import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import Statistics from '../../components/d3/Statistics';
import {
    DashboardContainer,
    CardsView,
    CalendarView,
    StatsView
} from './DashboardStyled';



const Dashboard = (): JSX.Element => {
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>

            <CardsView>
                <CalendarView>
                    <Calendar></Calendar>
                </CalendarView>
                <StatsView>
                    <Statistics></Statistics>
                </StatsView>
            </CardsView>
        </DashboardContainer>
    );
}

export default Dashboard;
