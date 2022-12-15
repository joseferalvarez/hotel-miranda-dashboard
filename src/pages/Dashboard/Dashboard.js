"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Calendar_1 = __importDefault(require("../../components/Calendar/Calendar"));
var Statistics_1 = __importDefault(require("../../components/d3/Statistics"));
var DashboardStyled_1 = require("./DashboardStyled");
var Dashboard = function () {
    return (react_1["default"].createElement(DashboardStyled_1.DashboardContainer, null,
        react_1["default"].createElement("h1", null, "Dashboard"),
        react_1["default"].createElement(DashboardStyled_1.CardsView, null,
            react_1["default"].createElement(DashboardStyled_1.CalendarView, null,
                react_1["default"].createElement(Calendar_1["default"], null)),
            react_1["default"].createElement(DashboardStyled_1.StatsView, null,
                react_1["default"].createElement(Statistics_1["default"], null)))));
};
exports["default"] = Dashboard;
