import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from '../../components/Calendar/Calendar';
import Statistics from '../../components/d3/Statistics';
import { DashboardContainer } from './DashboardStyled';
import CardInfo from '../../components/Blocks/CardInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../actions/actionsBooking';
import { getAllRooms } from '../../actions/actionsRoom';
import { getAllContacts } from '../../actions/actionsContact';
import ContactList from '../../components/Contacts/ContactList';

const CardsView = styled.div`
    display: flex;
    gap: 5%;
    margin: 0 5%;
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    gap: 3%;
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
`;

const Dashboard = () => {

    const { bookings } = useSelector((state) => state.bookingsReducer);
    const { rooms } = useSelector((state) => state.roomsReducer);
    const { contacts } = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    const countNewBookings = () => {
        const actualyear = new Date(Date.now()).getFullYear();
        return bookings.reduce((count, booking) => new Date(booking.order).getFullYear() === actualyear ? count + 1 : count, 0);
    }

    const countCheckin = () => {
        return bookings.reduce((count, booking) => booking.checkin ? count + 1 : count, 0);
    }

    const countCheckout = () => {
        return bookings.reduce((count, booking) => booking.checkout ? count + 1 : count, 0);
    }

    const countAvailableRooms = () => {
        return rooms.reduce((count, room) => room.status === 1 ? count + 1 : count, 0);
    }

    const getWeekDays = () => {
        const week = [];
        const DAY = 1000 * 60 * 60 * 24;
        let time = 0;

        for (let i = 0; i < 7; i++) {
            let today = new Date(Date.now()).getTime();

            week.push(today - time);
            time = time + DAY;
        }
        return week;
    }

    const getWeekStats = (week) => {
        const weekbookings = [];
        const stats = [];

        bookings.forEach((booking) => {
            const checkin = new Date(booking.checkin).getTime();
            const checkout = new Date(booking.checkout).getTime();

            for (let i = 0; i < week.length; i++) {
                const day = new Date(week[i]).getTime();
                if (day >= checkin && day <= checkout) {
                    weekbookings.push({
                        checkin: checkin,
                        checkout: checkout,
                        price: booking.price
                    });
                }
            }
        });

        for (let i = 0; i < week.length; i++) {
            let day = {
                date: week[i],
                amount: 0,
                count: 0
            };

            for (let j = 0; j < weekbookings.length; j++) {
                if (week[i] >= weekbookings[j].checkin && week[i] <= weekbookings[j].checkout) {
                    day = { ...day, amount: day.amount + weekbookings[j].price, count: day.count + 1 }
                }
            }

            stats.push(day);
        }
        return stats.sort((a, b) => a.date - b.date);
    }

    /* Use Effects*/
    useEffect(() => {
        if (bookings.length === 0) {
            getAllBookings(dispatch);
        }
        if (rooms.length === 0) {
            getAllRooms(dispatch);
        }
        if (contacts.length === 0) {
            getAllContacts(dispatch);
        }
    }, []);

    useEffect(() => {
        setNewBookings({
            type: "NewBookings",
            number: countNewBookings(),
            text: `Bookings in ${new Date(Date.now()).getFullYear()}`
        });

        setCheckins({ ...checkins, number: countCheckin() });
        setCheckouts({ ...checkouts, number: countCheckout() });
    }, [bookings])

    useEffect(() => {
        setRoomsAvailable({ ...roomsAvailable, number: countAvailableRooms() });
    }, [rooms]);

    /* States */
    const [newBookings, setNewBookings] = useState({
        type: "NewBookings",
        number: countNewBookings(),
        text: `Bookings order in ${new Date(Date.now()).getFullYear()}`
    });

    const [checkins, setCheckins] = useState({
        type: "Checkin",
        number: countCheckin(),
        text: "Check In"
    });

    const [checkouts, setCheckouts] = useState({
        type: "Checkout",
        number: countCheckout(),
        text: "Check Out"
    });

    const [roomsAvailable, setRoomsAvailable] = useState({
        type: "Available",
        number: countAvailableRooms(),
        text: "Rooms available now"
    });



    return (
        <DashboardContainer>
            <Info>
                <CardInfo data={newBookings}></CardInfo>
                <CardInfo data={roomsAvailable}></CardInfo>
                <CardInfo data={checkins}></CardInfo>
                <CardInfo data={checkouts}></CardInfo>
            </Info>

            <CardsView>
                <CalendarView>
                    <Calendar></Calendar>
                </CalendarView>
                <StatsView>
                    <Statistics stats={getWeekStats(getWeekDays())}></Statistics>
                </StatsView>
            </CardsView>

            <ContactList contacts={contacts}></ContactList>
        </DashboardContainer>
    );
}

export default Dashboard;
