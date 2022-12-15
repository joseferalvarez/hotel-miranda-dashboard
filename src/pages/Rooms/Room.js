"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../App/hooks/hooks");
var RoomStyled_1 = require("./RoomStyled");
var Room = function () {
    var room = (0, hooks_1.useAppSelector)(function (state) { return state.roomsReducer; }).room;
    return (react_1["default"].createElement(RoomStyled_1.RoomContainer, null,
        react_1["default"].createElement(RoomStyled_1.DataContainer, null,
            react_1["default"].createElement(RoomStyled_1.StateContainer, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(RoomStyled_1.RoomNumber, null,
                        "Room n\u00BA",
                        room.number),
                    react_1["default"].createElement(RoomStyled_1.RoomId, null,
                        "#",
                        room.id),
                    react_1["default"].createElement(RoomStyled_1.RoomType, null, room.type)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(RoomStyled_1.RoomState, { status: room.status ? "#5AD07A" : "#E23428" }, room.status ? "Available" : "Booked"))),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement(RoomStyled_1.PriceContainer, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(RoomStyled_1.Subtitle, null, "Rate"),
                    react_1["default"].createElement(RoomStyled_1.Rate, null,
                        "$",
                        room.price,
                        react_1["default"].createElement("span", null, "/night"))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(RoomStyled_1.Subtitle, null, "Offer Price"),
                    react_1["default"].createElement(RoomStyled_1.Rate, null,
                        "$",
                        room.offer,
                        react_1["default"].createElement("span", null, "/night")))),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement(RoomStyled_1.Subtitle, null, "Facilities"),
            react_1["default"].createElement(RoomStyled_1.FacilitiesContainer, null, room.amenities.map(function (obj, index) { return (react_1["default"].createElement(RoomStyled_1.Facilitie, { key: index }, obj)); }))),
        react_1["default"].createElement(RoomStyled_1.PhotoContainer, null,
            react_1["default"].createElement("img", { src: room.photo, alt: "" }))));
};
exports["default"] = Room;
