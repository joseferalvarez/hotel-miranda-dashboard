import styled from 'styled-components';

const CalendarContainer = styled.div`
    .fc-toolbar-chunk{
        font-family: var(--font-poppins);

        .fc-toolbar-title{
            font-size: 1.2rem;
            font-weight: 500;
        }

        .fc-button{
            background-color: #135846;
            color: #FFFFFF;
        }
    }

    table{
        border-collapse: separate;
        border: none;
    }
    .fc-theme-standard th,
    .fc-theme-standard td,
    .fc-theme-standard .fc-scrollgrid{
        border: none;
    }

    .fc-col-header-cell{
        font-weight: 500;
        color: #799283;
    }

    .fc-day{
        font-family: var(--font-poppins);
    }

    .fc-daygrid-day{
        border-radius: 12px;
        width: 53px;
        height: 53px;
    }

    .fc-daygrid-day-frame{
        height: 100%;
    }

    .fc-daygrid-day-top{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .fc-daygrid-day-events{
        display: none;
    }
`;

export { CalendarContainer };
