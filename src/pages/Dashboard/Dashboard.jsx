import React, { useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import Statistics from '../../components/d3/Statistics';
import CardInfo from '../../components/Blocks/CardInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../actions/actionsBooking';
import { getAllRooms } from '../../actions/actionsRoom';
import { getAllContacts } from '../../actions/actionsContact';
import ContactList from '../../components/Contacts/ContactList';
import { countNewBookings, countCheckin, countCheckout, countAvailableRooms, getWeekDays, getEvents, getWeekData, getWeekStats } from '../../helpers/helpers';
import { DashboardContainer, CardsView, Info, CalendarView, StatsView, SwiperContainer } from "./DashboardStyled";

const Dashboard = () => {
    const { bookings } = useSelector((state) => state.bookingsReducer);
    const { rooms } = useSelector((state) => state.roomsReducer);
    const { contacts } = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    /* Use Effects*/
    useEffect(() => {
        if (!bookings.length) {
            getAllBookings(dispatch);
        }
        if (!rooms.length) {
            getAllRooms(dispatch);
        }
        if (!contacts.length) {
            getAllContacts(dispatch);
        }
    }, []);

    return (
        <DashboardContainer>
            <Info>
                <CardInfo data={{
                    type: "NewBookings",
                    number: countNewBookings(bookings),
                    text: `Bookings order in ${new Date(Date.now()).getFullYear()}`
                }}></CardInfo>
                <CardInfo data={{
                    type: "Available",
                    number: countAvailableRooms(rooms),
                    text: "Rooms available now"
                }}></CardInfo>
                <CardInfo data={{
                    type: "Checkin",
                    number: countCheckin(bookings),
                    text: "Check In"
                }}></CardInfo>
                <CardInfo data={{
                    type: "Checkout",
                    number: countCheckout(bookings),
                    text: "Check Out"
                }}></CardInfo>
            </Info>

            <CardsView>
                <CalendarView>
                    <Calendar events={getEvents(bookings)}></Calendar>
                </CalendarView>
                <StatsView>
                    <Statistics stats={getWeekStats(getWeekDays(), getWeekData(getWeekDays(), bookings))}></Statistics>
                </StatsView>
            </CardsView>
            <SwiperContainer>
                <ContactList contacts={contacts}></ContactList>
            </SwiperContainer>
        </DashboardContainer>
    );
}

export default Dashboard;
