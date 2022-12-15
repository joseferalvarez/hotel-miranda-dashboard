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
var RoomTable_1 = __importDefault(require("../../components/Rooms/RoomTable"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var RoomsStyled_1 = require("./RoomsStyled");
var sliceRooms_1 = require("../../features/sliceRooms/sliceRooms");
var react_router_dom_1 = require("react-router-dom");
var Select_1 = __importDefault(require("../../components/Blocks/Select"));
var Blocks_1 = require("../../components/Blocks/Blocks");
var LinksStyled_1 = require("../../components/Blocks/LinksStyled");
var hooks_1 = require("../../App/hooks/hooks");
var Rooms = function () {
    var dispatch = (0, hooks_1.useAppDispatch)();
    var rooms = (0, hooks_1.useAppSelector)(function (state) { return state.roomsReducer; }).rooms;
    var _a = (0, react_1.useState)(rooms), roomList = _a[0], setRoomList = _a[1];
    (0, react_1.useEffect)(function () {
        if (rooms.length === 0) {
            dispatch((0, sliceRooms_1.getApiRooms)());
        }
        setRoomList(rooms);
    }, [rooms, dispatch]);
    var getAllRooms = function () {
        setRoomList(rooms);
    };
    var filterByType = function (type) {
        setRoomList(rooms.filter(function (room) { return room.status === type; }));
    };
    return (react_1["default"].createElement(RoomsStyled_1.RoomsContainer, null,
        react_1["default"].createElement("div", { className: 'content' },
            react_1["default"].createElement(Blocks_1.TableTools, null,
                react_1["default"].createElement(Blocks_1.FilterTable, null,
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: getAllRooms }, "All Rooms"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByType(true); } }, "Available Rooms"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByType(false); } }, "Booked Rooms")),
                react_1["default"].createElement(Blocks_1.TableButtons, null,
                    react_1["default"].createElement(LinksStyled_1.ButtonNew, null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/rooms/newroom" }, "+ New Room")),
                    react_1["default"].createElement(Select_1["default"], { typeSelect: "white", options: ["Newest"] }))),
            react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend },
                react_1["default"].createElement(RoomTable_1["default"], { data: roomList })))));
};
exports["default"] = Rooms;
