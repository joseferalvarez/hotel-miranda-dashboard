"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var sliceBookings_1 = require("../features/sliceBookings/sliceBookings");
var sliceContact_1 = require("../features/sliceContact/sliceContact");
var sliceRooms_1 = require("../features/sliceRooms/sliceRooms");
var sliceUsers_1 = require("../features/sliceUsers/sliceUsers");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        bookingsReducer: sliceBookings_1["default"],
        contactReducer: sliceContact_1["default"],
        roomsReducer: sliceRooms_1["default"],
        usersReducer: sliceUsers_1["default"]
    }
});
