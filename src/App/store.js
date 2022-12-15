"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var sliceBookings_1 = __importDefault(require("../features/sliceBookings/sliceBookings"));
var sliceContact_1 = __importDefault(require("../features/sliceContact/sliceContact"));
var sliceRooms_1 = __importDefault(require("../features/sliceRooms/sliceRooms"));
var sliceUsers_1 = __importDefault(require("../features/sliceUsers/sliceUsers"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        bookingsReducer: sliceBookings_1["default"],
        contactReducer: sliceContact_1["default"],
        roomsReducer: sliceRooms_1["default"],
        usersReducer: sliceUsers_1["default"]
    }
});
