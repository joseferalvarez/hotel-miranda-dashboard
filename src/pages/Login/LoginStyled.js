"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Icon = exports.Input = exports.InputContainer = exports.LogoContainer = exports.LoginCard = exports.LoginContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var LoginContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
exports.LoginContainer = LoginContainer;
var LoginCard = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: white;\n    display: block;\n    border-radius: 8px;\n    box-shadow: 0px 16px 30px #00000014;\n    padding: 3%;\n"], ["\n    background-color: white;\n    display: block;\n    border-radius: 8px;\n    box-shadow: 0px 16px 30px #00000014;\n    padding: 3%;\n"])));
exports.LoginCard = LoginCard;
var LogoContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"], ["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"])));
exports.LogoContainer = LogoContainer;
var InputContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: relative;\n"], ["\n    position: relative;\n"])));
exports.InputContainer = InputContainer;
var Input = styled_components_1["default"].input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    transition: all 0.1s;\n    width: 100%;\n    margin: 30px 0;\n    display: block;\n    font-family: var(--font-poppins);\n    font-size: 1.1rem;\n    border: none;\n    border-bottom: 1px solid #C5C5C5;\n    padding-left: 30px;\n\n    &:hover{\n        border-bottom: 1px solid #135846;\n    }\n    &:hover~div .input-icon{\n        color: #135846;\n    }\n\n    &:focus{\n        outline: none;\n        border-bottom: 1px solid #135846;\n    }\n\n    &:focus~div .input-icon{\n        color: #135846;\n    }\n"], ["\n    transition: all 0.1s;\n    width: 100%;\n    margin: 30px 0;\n    display: block;\n    font-family: var(--font-poppins);\n    font-size: 1.1rem;\n    border: none;\n    border-bottom: 1px solid #C5C5C5;\n    padding-left: 30px;\n\n    &:hover{\n        border-bottom: 1px solid #135846;\n    }\n    &:hover~div .input-icon{\n        color: #135846;\n    }\n\n    &:focus{\n        outline: none;\n        border-bottom: 1px solid #135846;\n    }\n\n    &:focus~div .input-icon{\n        color: #135846;\n    }\n"])));
exports.Input = Input;
var Icon = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    top: 5px;\n    .input-icon{\n        transition: all 0.1s;\n        color: #C5C5C5;\n    }\n"], ["\n    position: absolute;\n    top: 5px;\n    .input-icon{\n        transition: all 0.1s;\n        color: #C5C5C5;\n    }\n"])));
exports.Icon = Icon;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
