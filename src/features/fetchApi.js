import bookings from "../db/guest.json";
import rooms from "../db/rooms.json";
import users from "../db/users.json";

export const fetchApi = (query) => {
    switch (query) {
        case "Bookings":
            return bookings;
        case "Rooms":
            return rooms;
        case "Users":
            return users;
        default:
            return "";
    }
}
