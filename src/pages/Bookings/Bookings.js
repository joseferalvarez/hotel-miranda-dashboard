"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var GuestsTable_1 = __importDefault(require("../../components/Bookings/GuestsTable"));
var BookingsStyled_1 = require("./BookingsStyled");
var Blocks_1 = require("../../components/Blocks/Blocks");
var Select_1 = __importDefault(require("../../components/Blocks/Select"));
var sliceBookings_1 = require("../../features/sliceBookings/sliceBookings");
var hooks_1 = require("../../App/hooks/hooks");
var Bookings = function () {
    var dispatch = (0, hooks_1.useAppDispatch)();
    var bookings = (0, hooks_1.useAppSelector)((function (state) { return state.bookingsReducer; })).bookings;
    var _a = (0, react_1.useState)(bookings), bookingList = _a[0], setBookingList = _a[1];
    (0, react_1.useEffect)(function () {
        if (bookings.length === 0) {
            dispatch((0, sliceBookings_1.getApiBookings)());
        }
        setBookingList(bookings);
    }, [bookings, dispatch]);
    var getAllBookings = function () {
        setBookingList(bookings);
    };
    var filterByType = function (type) {
        setBookingList(bookings.filter(function (booking) { return booking.state === type; }));
    };
    return (react_1["default"].createElement(BookingsStyled_1.BookingsContainer, null,
        react_1["default"].createElement("div", { className: 'content' },
            react_1["default"].createElement(Blocks_1.TableTools, null,
                react_1["default"].createElement(Blocks_1.FilterTable, null,
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: getAllBookings }, "All Bookings"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByType("Check In"); } }, "Checking In"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByType("Check Out"); } }, "Checking Out"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByType("In Progress"); } }, "In Progress")),
                react_1["default"].createElement(Blocks_1.TableButtons, null,
                    react_1["default"].createElement(Select_1["default"], { typeSelect: "green", options: ["1 November 2020 - 30 November 2020"] }),
                    react_1["default"].createElement(Select_1["default"], { typeSelect: "white", options: ["Newest"] }))),
            react_1["default"].createElement(GuestsTable_1["default"], { data: bookingList }))));
};
exports["default"] = Bookings;
