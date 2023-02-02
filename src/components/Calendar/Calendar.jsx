/**React */
import React from 'react';
/**Components */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
/**Styles */
import { CalendarContainer } from "../../Styles/Dashboard/Calendar"

/**Component */
const Calendar = ({ events }) => {
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
