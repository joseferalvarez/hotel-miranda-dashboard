import React from 'react';
import Statistics from '../../components/d3/Statistics';
import { DashboardContainer } from './DashboardStyled';

const Dashboard = () => {
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <Statistics></Statistics>
        </DashboardContainer>
    );
}

export default Dashboard;
