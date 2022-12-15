"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var hooks_js_1 = require("../../App/hooks/hooks.js");
var sliceRooms_js_1 = require("../../features/sliceRooms/sliceRooms.js");
var NewRoom = function () {
    var dispatch = (0, hooks_js_1.useAppDispatch)();
    var rooms = (0, hooks_js_1.useAppSelector)(function (state) { return state.roomsReducer; }).rooms;
    var _a = (0, react_1.useState)({
        id: null,
        number: null,
        photo: null,
        type: "Single Bed",
        amenities: [],
        price: null,
        offer: null,
        status: null
    }), room = _a[0], setRoom = _a[1];
    var createRoom = function () {
        dispatch((0, sliceRooms_js_1.createNewRoom)(room));
        console.log(rooms);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "newroom"),
        react_1["default"].createElement("input", { type: "number", value: room.id, onChange: function (e) { return setRoom(__assign(__assign({}, room), { id: Number(e.target.value) })); } }),
        react_1["default"].createElement("input", { type: "number", placeholder: "Number", value: room.number, onChange: function (e) { return setRoom(__assign(__assign({}, room), { number: Number(e.target.value) })); } }),
        react_1["default"].createElement("input", { type: "text", placeholder: "Photo", value: room.photo, onChange: function (e) { return setRoom(__assign(__assign({}, room), { photo: e.target.value })); } }),
        react_1["default"].createElement("select", { value: room.type, onChange: function (e) { return setRoom(__assign(__assign({}, room), { type: e.target.value })); } },
            react_1["default"].createElement("option", null, "Single Bed"),
            react_1["default"].createElement("option", null, "Double Bed"),
            react_1["default"].createElement("option", null, "Double Superior"),
            react_1["default"].createElement("option", null, "Suite")),
        react_1["default"].createElement("p", null, "amenities"),
        react_1["default"].createElement("input", { type: "text", placeholder: "price", value: room.price, onChange: function (e) { return setRoom(__assign(__assign({}, room), { price: Number(e.target.value) })); } }),
        react_1["default"].createElement("input", { type: "text", placeholder: "offer", value: room.offer, onChange: function (e) { return setRoom(__assign(__assign({}, room), { offer: Number(e.target.value) })); } }),
        react_1["default"].createElement("button", { onClick: createRoom }, "crear habitacion")));
};
exports["default"] = NewRoom;
