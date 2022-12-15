"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PhotoContainer = exports.Facilitie = exports.FacilitiesContainer = exports.RoomType = exports.RoomState = exports.RoomId = exports.RoomNumber = exports.Subtitle = exports.Rate = exports.PriceContainer = exports.StateContainer = exports.DataContainer = exports.RoomContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var RoomContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    background-color: #FFFFFF;\n    margin: 2% 5%;\n    border-radius: 12px;\n"], ["\n    display: flex;\n    background-color: #FFFFFF;\n    margin: 2% 5%;\n    border-radius: 12px;\n"])));
exports.RoomContainer = RoomContainer;
var DataContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 40%;\n    padding: 3% 5% 3% 5%;\n\n    hr{\n        border: 1px solid #D4D4D4;\n        border-radius: 50%;\n    }\n"], ["\n    width: 40%;\n    padding: 3% 5% 3% 5%;\n\n    hr{\n        border: 1px solid #D4D4D4;\n        border-radius: 50%;\n    }\n"])));
exports.DataContainer = DataContainer;
var StateContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n\n    div:nth-child(2n){\n        display: block;\n        margin-left: 25%;\n    }\n"], ["\n    display: flex;\n\n    div:nth-child(2n){\n        display: block;\n        margin-left: 25%;\n    }\n"])));
exports.StateContainer = StateContainer;
var PriceContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    gap: 20%;\n"], ["\n    display: flex;\n    gap: 20%;\n"])));
exports.PriceContainer = PriceContainer;
var Rate = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: #212121;\n    font-family: var(--font-poppins);\n    font-weight: 600;\n    font-size: 24px;\n    span{\n        color: #799283;\n        font-weight: 400;\n        font-size: 14px;\n    }\n"], ["\n    color: #212121;\n    font-family: var(--font-poppins);\n    font-weight: 600;\n    font-size: 24px;\n    span{\n        color: #799283;\n        font-weight: 400;\n        font-size: 14px;\n    }\n"])));
exports.Rate = Rate;
var Subtitle = styled_components_1["default"].p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    color: #6E6E6E;\n    font-family: var(--font-poppins);\n    font-size: 14px;\n"], ["\n    color: #6E6E6E;\n    font-family: var(--font-poppins);\n    font-size: 14px;\n"])));
exports.Subtitle = Subtitle;
var RoomNumber = styled_components_1["default"].h1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    color: #212121;\n    font-weight: 600;\n    font-family: var(--font-poppins);\n"], ["\n    color: #212121;\n    font-weight: 600;\n    font-family: var(--font-poppins);\n"])));
exports.RoomNumber = RoomNumber;
var RoomId = styled_components_1["default"].p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color: #799283;\n    font-family: var(--font-poppins);\n    font-size: 14px;\n"], ["\n    color: #799283;\n    font-family: var(--font-poppins);\n    font-size: 14px;\n"])));
exports.RoomId = RoomId;
var RoomState = styled_components_1["default"].p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    background-color: ", ";\n    color: white;\n    padding: 13px 25px;\n    border-radius: 12px;\n    text-align: center;\n    margin-left: 30px;\n    width: 125px;\n"], ["\n    background-color: ", ";\n    color: white;\n    padding: 13px 25px;\n    border-radius: 12px;\n    text-align: center;\n    margin-left: 30px;\n    width: 125px;\n"])), function (props) { return props.status || "blue"; });
exports.RoomState = RoomState;
var RoomType = styled_components_1["default"].p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    color: #393939;\n    font-family: var(--font-poppins);\n    font-size: 20px;\n    font-weight: 500;\n"], ["\n    color: #393939;\n    font-family: var(--font-poppins);\n    font-size: 20px;\n    font-weight: 500;\n"])));
exports.RoomType = RoomType;
var FacilitiesContainer = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n"])));
exports.FacilitiesContainer = FacilitiesContainer;
var Facilitie = styled_components_1["default"].p(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    color: #135846;\n    background-color: #EBF1EF;\n    padding: 14px 40px;\n    border-radius: 12px;\n"], ["\n    font-family: var(--font-poppins);\n    color: #135846;\n    background-color: #EBF1EF;\n    padding: 14px 40px;\n    border-radius: 12px;\n"])));
exports.Facilitie = Facilitie;
var PhotoContainer = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    width: 50%;\n    img{\n        object-fit: cover;\n        width: 100%;\n        height: 100%;\n        border-radius: 0 12px 12px 0;\n    }\n"], ["\n    width: 50%;\n    img{\n        object-fit: cover;\n        width: 100%;\n        height: 100%;\n        border-radius: 0 12px 12px 0;\n    }\n"])));
exports.PhotoContainer = PhotoContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
