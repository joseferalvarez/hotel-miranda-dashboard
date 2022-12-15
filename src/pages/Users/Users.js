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
var UsersTable_1 = __importDefault(require("../../components/Users/UsersTable"));
var sliceUsers_1 = require("../../features/sliceUsers/sliceUsers");
var UsersStyled_1 = require("./UsersStyled");
var Button_1 = __importDefault(require("../../components/Blocks/Button"));
var Select_1 = __importDefault(require("../../components/Blocks/Select"));
var Blocks_1 = require("../../components/Blocks/Blocks");
var hooks_1 = require("../../App/hooks/hooks");
var Users = function () {
    var dispatch = (0, hooks_1.useAppDispatch)();
    var users = (0, hooks_1.useAppSelector)(function (state) { return state.usersReducer; }).users;
    var _a = (0, react_1.useState)(users), userList = _a[0], setUserList = _a[1];
    (0, react_1.useEffect)(function () {
        if (users.length === 0) {
            dispatch((0, sliceUsers_1.getApiUsers)());
        }
        setUserList(users);
    }, [users, dispatch]);
    var getAllUsers = function () {
        setUserList(users);
    };
    var filterByUsers = function (type) {
        setUserList(users.filter(function (user) { return user.state === type; }));
    };
    return (react_1["default"].createElement(UsersStyled_1.UsersContainer, null,
        react_1["default"].createElement("div", { className: 'content' },
            react_1["default"].createElement(Blocks_1.TableTools, null,
                react_1["default"].createElement(Blocks_1.FilterTable, null,
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: getAllUsers }, "All Employee"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByUsers(true); } }, "Active Employee"),
                    react_1["default"].createElement(Blocks_1.FilterButton, { onClick: function () { return filterByUsers(false); } }, "Inactive Employee")),
                react_1["default"].createElement(Blocks_1.TableButtons, null,
                    react_1["default"].createElement(Button_1["default"], { typeButton: "create", text: "+ New Employee", enabled: false, click: "" }),
                    react_1["default"].createElement(Select_1["default"], { typeSelect: "white", options: ["Newest"] }))),
            react_1["default"].createElement(UsersTable_1["default"], { data: userList }))));
};
exports["default"] = Users;
