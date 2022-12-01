import FullCalendar from '@fullcalendar/react';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarContainer } from "./CalendarStyled"

const Calendar = () => {

    return (
        <CalendarContainer>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth">
            </FullCalendar>
        </CalendarContainer>
    );
}

export default Calendar;
