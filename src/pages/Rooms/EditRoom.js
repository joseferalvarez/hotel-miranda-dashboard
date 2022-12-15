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
var hooks_1 = require("../../App/hooks/hooks");
var sliceRooms_1 = require("../../features/sliceRooms/sliceRooms");
var EditRoom = function () {
    var dispatch = (0, hooks_1.useAppDispatch)();
    var room = (0, hooks_1.useAppSelector)(function (state) { return state.roomsReducer; }).room;
    var _a = (0, react_1.useState)({
        id: room.id,
        number: room.number,
        photo: room.photo,
        type: room.type,
        amenities: room.amenities,
        price: room.price,
        offer: room.offer,
        status: room.status
    }), roomEdit = _a[0], setRoomEdit = _a[1];
    var setEditRoom = function () {
        dispatch((0, sliceRooms_1.editRoom)(roomEdit));
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null,
            "Edit Room N\u00BA",
            room.number),
        react_1["default"].createElement("input", { type: "number", placeholder: "Number", value: roomEdit.number, onChange: function (e) { return setRoomEdit(__assign(__assign({}, roomEdit), { number: Number(e.target.value) })); } }),
        react_1["default"].createElement("input", { type: "text", placeholder: "Photo", value: roomEdit.photo, onChange: function (e) { return setRoomEdit(__assign(__assign({}, roomEdit), { photo: e.target.value })); } }),
        react_1["default"].createElement("select", { value: roomEdit.type, onChange: function (e) { return setRoomEdit(__assign(__assign({}, roomEdit), { type: e.target.value })); } },
            react_1["default"].createElement("option", null, "Single Bed"),
            react_1["default"].createElement("option", null, "Double Bed"),
            react_1["default"].createElement("option", null, "Double Superior"),
            react_1["default"].createElement("option", null, "Suite")),
        react_1["default"].createElement("p", null, "amenities"),
        react_1["default"].createElement("input", { type: "number", placeholder: "price", value: roomEdit.price, onChange: function (e) { return setRoomEdit(__assign(__assign({}, roomEdit), { price: Number(e.target.value) })); } }),
        react_1["default"].createElement("input", { type: "number", placeholder: "offer", value: roomEdit.offer, onChange: function (e) { return setRoomEdit(__assign(__assign({}, roomEdit), { offer: Number(e.target.value) })); } }),
        react_1["default"].createElement("button", { onClick: setEditRoom }, "Editar habitacion")));
};
exports["default"] = EditRoom;
