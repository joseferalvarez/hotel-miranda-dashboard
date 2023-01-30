import FullCalendar from '@fullcalendar/react';
import React, { useEffect } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarContainer } from "./CalendarStyled"

const Calendar = ({ events }) => {

    useEffect(() => {
        console.log(events);
    }, []);

    return (
        <CalendarContainer>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventColor='#135846'
                eventDisplay='block'>
            </FullCalendar>
        </CalendarContainer>
    );
}

export default Calendar;
