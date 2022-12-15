"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.fetchApi = void 0;
var guest_json_1 = __importDefault(require("../db/guest.json"));
var rooms_json_1 = __importDefault(require("../db/rooms.json"));
var users_json_1 = __importDefault(require("../db/users.json"));
var fetchApi = function (query) {
    switch (query) {
        case "Bookings":
            return guest_json_1["default"];
        case "Rooms":
            return rooms_json_1["default"];
        case "Users":
            return users_json_1["default"];
        default:
            return "";
    }
};
exports.fetchApi = fetchApi;
