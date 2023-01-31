/* Return the number of bookings in the actual year */
const countNewBookings = (bookings) => {
    const actualyear = new Date(Date.now()).getFullYear();
    return bookings.reduce((count, booking) => new Date(booking.order).getFullYear() === actualyear ? count + 1 : count, 0);
}

/* Return the total number of checkins */
const countCheckin = (bookings) => {
    return bookings.reduce((count, booking) => booking.checkin ? count + 1 : count, 0);
}

/* Return the total number of checkouts */
const countCheckout = (bookings) => {
    return bookings.reduce((count, booking) => booking.checkout ? count + 1 : count, 0);
}

/* Return the number of available rooms */
const countAvailableRooms = (rooms) => {
    return rooms.reduce((count, room) => room.status === 1 ? count + 1 : count, 0);
}

/* Return the actual date and the 6 days ago */
const getWeekDays = () => {
    const week = [];
    const DAY = 1000 * 60 * 60 * 24;
    let time = 0;

    for (let i = 0; i < 7; i++) {
        let today = new Date(Date.now()).getTime();

        week.push(today - time);
        time = time + DAY;
    }
    return week.sort();
}

/* Return an array of objects with booking dates */
const getEvents = (bookings) => {
    return bookings.map((booking) => {
        return {
            title: `${booking.name} - ${booking.numroom}`,
            start: new Date(booking.checkin).toISOString(),
            end: new Date(booking.checkout).toISOString()
        }
    });
}

/* Return the dates and price of all bookings in this week */
const getWeekData = (week, bookings) => {
    const weekbookings = [];

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

    return weekbookings;
}

/* Return the week booking stats */
const getWeekStats = (week, weekbookings) => {
    const stats = [];

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

    return stats;
}

export {
    countNewBookings,
    countCheckin,
    countCheckout,
    countAvailableRooms,
    getWeekDays,
    getEvents,
    getWeekData,
    getWeekStats
}
