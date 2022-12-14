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
exports.sliceContact = exports.getContact = exports.editContact = exports.deleteContact = exports.createNewContact = exports.getApiContact = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var fetchApi_1 = require("../fetchApi");
exports.getApiContact = (0, toolkit_1.createAsyncThunk)("contact/fetchContacts", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, fetchApi_1.fetchApi)("Bookings")];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.createNewContact = (0, toolkit_1.createAsyncThunk)("contact/CreateContact", function (newContact) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, newContact];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.deleteContact = (0, toolkit_1.createAsyncThunk)("contact/DeleteContact", function (idContact) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, idContact];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.editContact = (0, toolkit_1.createAsyncThunk)("contact/EditContact", function (idContact) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, idContact];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
exports.getContact = (0, toolkit_1.createAsyncThunk)("contact/GetContactDetails", function (idContact) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, idContact];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
var initialState = {
    contacts: [],
    contact: null
};
exports.sliceContact = (0, toolkit_1.createSlice)({
    name: "contact",
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(exports.getApiContact.fulfilled, function (state, action) {
            state.contacts = action.payload;
        }).addCase(exports.getApiContact.rejected, function () {
            console.error("No se han podido encontrar reservas.");
        });
        builder.addCase(exports.createNewContact.fulfilled, function (state, action) {
            state.contacts = __spreadArray(__spreadArray([], state.contacts, true), [action.payload], false);
        });
        builder.addCase(exports.deleteContact.fulfilled, function (state, action) {
            state.contacts = state.contacts.filter(function (contact) { return contact.id !== action.payload; });
        });
        builder.addCase(exports.editContact.fulfilled, function (state, action) {
            state.contacts = state.contacts.map(function (contact) {
                return contact.id === action.payload.id ? action.payload : contact;
            });
        });
        builder.addCase(exports.getContact.fulfilled, function (state, action) {
            state.contact = state.contacts.find(function (contact) { return contact.id === action.payload; });
        });
    }
});
exports["default"] = exports.sliceContact.reducer;
