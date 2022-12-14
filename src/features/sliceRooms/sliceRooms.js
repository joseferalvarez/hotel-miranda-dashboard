"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.sliceRooms = exports.getRoom = exports.editRoom = exports.deleteRoom = exports.createNewRoom = exports.getApiRooms = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var fetchApi_1 = require("../fetchApi");
exports.getApiRooms = (0, toolkit_1.createAsyncThunk)("room/fetchRooms", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, fetchApi_1.fetchApi)("Rooms")];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.createNewRoom = (0, toolkit_1.createAsyncThunk)("room/CreateRoom", function (newRoom) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newRoom];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.deleteRoom = (0, toolkit_1.createAsyncThunk)("room/DeleteRoom", function (idRoom) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, idRoom];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.editRoom = (0, toolkit_1.createAsyncThunk)("room/EditRoom", function (idRoom) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, idRoom];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.getRoom = (0, toolkit_1.createAsyncThunk)("room/GetRoomDetails", function (idRoom) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, idRoom];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
var initialState = {
    rooms: [],
    room: null
};
exports.sliceRooms = (0, toolkit_1.createSlice)({
    name: "rooms",
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(exports.getApiRooms.fulfilled, function (state, action) {
            state.rooms = action.payload;
        }).addCase(exports.getApiRooms.rejected, function () {
            console.error("No se han podido encontrar habitaciones.");
        });
        builder.addCase(exports.createNewRoom.fulfilled, function (state, action) {
            state.rooms = __spreadArray(__spreadArray([], state.rooms, true), [action.payload], false);
        });
        builder.addCase(exports.deleteRoom.fulfilled, function (state, action) {
            state.rooms = state.rooms.filter(function (room) { return room.id !== action.payload; });
        });
        builder.addCase(exports.editRoom.fulfilled, function (state, action) {
            state.rooms = state.rooms.map(function (room) {
                return room.id === action.payload.id ? action.payload : room;
            });
        });
        builder.addCase(exports.getRoom.fulfilled, function (state, action) {
            state.room = state.rooms.find(function (room) { return room.id === action.payload; });
        });
    }
});
exports["default"] = exports.sliceRooms.reducer;
