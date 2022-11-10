import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/topbar';

const DashboardContainer = styled.div`
    width: 100%;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Topbar title="Dashboard"></Topbar>
            <h1>Dashboard</h1>
        </DashboardContainer>
    );
}

export default Dashboard;
