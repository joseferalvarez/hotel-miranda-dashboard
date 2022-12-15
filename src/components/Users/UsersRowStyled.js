"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UserStatus = exports.UserData = exports.UserName = exports.UserNameContainer = exports.CheckboxContainer = exports.DataContainerButton = exports.DataContainer = exports.Row = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Row = styled_components_1["default"].tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom: 1px solid #D4D4D4;\n    border-top: 1px solid #D4D4D4;\n    transition: box-shadow 0.2s;\n\n    &:hover{\n        box-shadow: 0px 4px 30px #00000014;\n    }\n\n    .data,\n    .user__data{\n        font-family: var(--font-poppins);\n        color: #393939;\n    }\n"], ["\n    border-bottom: 1px solid #D4D4D4;\n    border-top: 1px solid #D4D4D4;\n    transition: box-shadow 0.2s;\n\n    &:hover{\n        box-shadow: 0px 4px 30px #00000014;\n    }\n\n    .data,\n    .user__data{\n        font-family: var(--font-poppins);\n        color: #393939;\n    }\n"])));
exports.Row = Row;
var DataContainer = styled_components_1["default"].td(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    vertical-align: top;\n\n    .data{\n        &__description{\n            max-width: 300px;\n            padding-left: 30px;\n        }\n\n        &__contact{\n            color: #212121;\n            font-weight: 600;\n            font-size: 14px;\n            padding-left: 30px;\n            span{\n                margin-left: 10px;\n            }\n        }\n    }\n\n\n"], ["\n    vertical-align: top;\n\n    .data{\n        &__description{\n            max-width: 300px;\n            padding-left: 30px;\n        }\n\n        &__contact{\n            color: #212121;\n            font-weight: 600;\n            font-size: 14px;\n            padding-left: 30px;\n            span{\n                margin-left: 10px;\n            }\n        }\n    }\n\n\n"])));
exports.DataContainer = DataContainer;
var DataContainerButton = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    vertical-align: top;\n    padding-right: 30px;\n\n    button{\n        background-color: transparent;\n        border: none;\n        margin-left: 60px;\n        margin-top: 15px;\n        width: 24px;\n        height: 24px;\n        .icon{\n            width: 25px;\n            height: 25px;\n            padding-right: 30px;\n        }\n    }\n"], ["\n    vertical-align: top;\n    padding-right: 30px;\n\n    button{\n        background-color: transparent;\n        border: none;\n        margin-left: 60px;\n        margin-top: 15px;\n        width: 24px;\n        height: 24px;\n        .icon{\n            width: 25px;\n            height: 25px;\n            padding-right: 30px;\n        }\n    }\n"])));
exports.DataContainerButton = DataContainerButton;
var CheckboxContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: block;\n    margin-top: 20px;\n    padding-left: 30px;\n"], ["\n    display: block;\n    margin-top: 20px;\n    padding-left: 30px;\n"])));
exports.CheckboxContainer = CheckboxContainer;
var UserNameContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 28px;\n\n    img{\n        border-radius: 8px;\n        width: 88px;\n        height: 88px;\n        object-fit: cover;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 28px;\n\n    img{\n        border-radius: 8px;\n        width: 88px;\n        height: 88px;\n        object-fit: cover;\n    }\n"])));
exports.UserNameContainer = UserNameContainer;
var UserName = styled_components_1["default"].p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-weight: 500;\n"], ["\n    font-weight: 500;\n"])));
exports.UserName = UserName;
var UserData = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-size: 14px;\n"], ["\n    font-size: 14px;\n"])));
exports.UserData = UserData;
var UserStatus = styled_components_1["default"].p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color: ", ";\n    font-family: var(--font-poppins);\n    font-size: 14px;\n    font-weight: 600;\n    text-align: center;\n"], ["\n    color: ", ";\n    font-family: var(--font-poppins);\n    font-size: 14px;\n    font-weight: 600;\n    text-align: center;\n"])), function (props) { return props.status || "blue"; });
exports.UserStatus = UserStatus;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
