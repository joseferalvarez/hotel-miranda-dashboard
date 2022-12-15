"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StatsView = exports.CalendarView = exports.CardsView = exports.DashboardContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var DashboardContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    margin-left: 20px;\n"], ["\n    width: 100%;\n    margin-left: 20px;\n"])));
exports.DashboardContainer = DashboardContainer;
var CardsView = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    gap: 5%;\n    margin: 0 5%;\n"], ["\n    display: flex;\n    gap: 5%;\n    margin: 0 5%;\n"])));
exports.CardsView = CardsView;
var CalendarView = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 40%;\n    background-color: #FFFFFF;\n    padding: 30px;\n    border-radius: 20px;\n    box-shadow: 0px 4px 4px #00000005;\n"], ["\n    width: 40%;\n    background-color: #FFFFFF;\n    padding: 30px;\n    border-radius: 20px;\n    box-shadow: 0px 4px 4px #00000005;\n"])));
exports.CalendarView = CalendarView;
var StatsView = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40%;\n    background-color: #FFFFFF;\n    padding: 30px;\n    border-radius: 20px;\n    box-shadow: 0px 4px 4px #00000005;\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40%;\n    background-color: #FFFFFF;\n    padding: 30px;\n    border-radius: 20px;\n    box-shadow: 0px 4px 4px #00000005;\n"])));
exports.StatsView = StatsView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
