"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.FilterButton = exports.FilterTable = exports.TableButtons = exports.TableTools = exports.Checkbox = exports.HeaderTitle = exports.Table = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Table = styled_components_1["default"].table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    background-color: #FFFFFF;\n    border-radius: 20px;\n    width: 100%;\n"], ["\n    border-collapse: collapse;\n    background-color: #FFFFFF;\n    border-radius: 20px;\n    width: 100%;\n"])));
exports.Table = Table;
var HeaderTitle = styled_components_1["default"].th(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    font-weight: 600;\n    text-align: start;\n    padding: 20px 0 20px 30px;\n"], ["\n    font-family: var(--font-poppins);\n    font-weight: 600;\n    text-align: start;\n    padding: 20px 0 20px 30px;\n"])));
exports.HeaderTitle = HeaderTitle;
var Checkbox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    position: relative;\n\n    input,\n    label span{\n        width: 24px;\n        height: 24px;\n    }\n\n    input {\n        position: absolute;\n        opacity: 0;\n        z-index: 1;\n\n        &:checked + label span {\n            border: 2px solid #135846;\n            &:after {\n                transform: translate(-50%, -50%) scale(1);\n            }\n        }\n    }\n\n    label span {\n        border: 2px solid #707070;\n        border-radius: 3px;\n        display: inline-block;\n        position: relative;\n\n        &:after {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%) scale(0);\n            width: 20px;\n            height: 20px;\n            background-color: #135846;\n            border-radius: 3px;\n            transition: 0.2s;\n        }\n    }\n"], ["\n    display: block;\n    position: relative;\n\n    input,\n    label span{\n        width: 24px;\n        height: 24px;\n    }\n\n    input {\n        position: absolute;\n        opacity: 0;\n        z-index: 1;\n\n        &:checked + label span {\n            border: 2px solid #135846;\n            &:after {\n                transform: translate(-50%, -50%) scale(1);\n            }\n        }\n    }\n\n    label span {\n        border: 2px solid #707070;\n        border-radius: 3px;\n        display: inline-block;\n        position: relative;\n\n        &:after {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%) scale(0);\n            width: 20px;\n            height: 20px;\n            background-color: #135846;\n            border-radius: 3px;\n            transition: 0.2s;\n        }\n    }\n"])));
exports.Checkbox = Checkbox;
var TableTools = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
exports.TableTools = TableTools;
var FilterTable = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    width: 60%;\n    margin-bottom: 50px;\n"], ["\n    display: flex;\n    width: 60%;\n    margin-bottom: 50px;\n"])));
exports.FilterTable = FilterTable;
var FilterButton = styled_components_1["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    color: #6E6E6E;\n    font-weight: 500;\n    padding: 12px 30px;\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #D4D4D4;\n\n    &:focus{\n        color: #135846;\n        border-bottom: 2px solid #135846;\n        outline: none;\n    }\n"], ["\n    font-family: var(--font-poppins);\n    color: #6E6E6E;\n    font-weight: 500;\n    padding: 12px 30px;\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #D4D4D4;\n\n    &:focus{\n        color: #135846;\n        border-bottom: 2px solid #135846;\n        outline: none;\n    }\n"])));
exports.FilterButton = FilterButton;
var TableButtons = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    width: 40%;\n    margin-left: 50px;\n    justify-content: flex-end;\n    gap: 20px;\n"], ["\n    display: flex;\n    width: 40%;\n    margin-left: 50px;\n    justify-content: flex-end;\n    gap: 20px;\n"])));
exports.TableButtons = TableButtons;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
