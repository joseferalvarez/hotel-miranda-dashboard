"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.__esModule = true;
exports.Status = exports.DataContainerCheckbox = exports.DataContainerButton = exports.DataContainer = exports.GuestId = exports.GuestName = exports.CheckboxContainer = exports.GuestContainer = exports.Row = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var Row = styled_components_1["default"].tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom: 1px solid #D4D4D4;\n    border-top: 1px solid #D4D4D4;\n    transition: box-shadow 0.2s;\n\n    &:hover{\n        box-shadow: 0px 4px 30px #00000014;\n    }\n"], ["\n    border-bottom: 1px solid #D4D4D4;\n    border-top: 1px solid #D4D4D4;\n    transition: box-shadow 0.2s;\n\n    &:hover{\n        box-shadow: 0px 4px 30px #00000014;\n    }\n"])));
exports.Row = Row;
var GuestContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 28px;\n    margin-left: 25px;\n\n    img{\n        border-radius: 8px;\n        width: 45px;\n        height: 45px;\n        object-fit: cover;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 28px;\n    margin-left: 25px;\n\n    img{\n        border-radius: 8px;\n        width: 45px;\n        height: 45px;\n        object-fit: cover;\n    }\n"])));
exports.GuestContainer = GuestContainer;
var CheckboxContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding-left: 30px;\n"], ["\n    padding-left: 30px;\n"])));
exports.CheckboxContainer = CheckboxContainer;
var GuestName = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    font-size: 16px;\n    font-weight: 500px;\n    color: #393939;\n"], ["\n    font-family: var(--font-poppins);\n    font-size: 16px;\n    font-weight: 500px;\n    color: #393939;\n"])));
exports.GuestName = GuestName;
var GuestId = styled_components_1["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: #799283;\n    font-size: 14px;\n    font-family: var(--font-poppins);\n"], ["\n    color: #799283;\n    font-size: 14px;\n    font-family: var(--font-poppins);\n"])));
exports.GuestId = GuestId;
var DataContainer = styled_components_1["default"].td(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    vertical-align: top;\n\n    p{\n        font-family: var(--font-poppins);\n        color: #393939;\n        font-size: 16px;\n        max-width: 300px;\n        padding-left: 30px;\n    }\n"], ["\n    vertical-align: top;\n\n    p{\n        font-family: var(--font-poppins);\n        color: #393939;\n        font-size: 16px;\n        max-width: 300px;\n        padding-left: 30px;\n    }\n"])));
exports.DataContainer = DataContainer;
var DataContainerButton = styled_components_1["default"].td(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    vertical-align: top;\n    padding-right: 30px;\n\n    button{\n        background-color: transparent;\n        border: none;\n        margin-left: 60px;\n        margin-top: 15px;\n        width: 24px;\n        height: 24px;\n        .icon{\n            width: 25px;\n            height: 25px;\n        }\n    }\n"], ["\n    vertical-align: top;\n    padding-right: 30px;\n\n    button{\n        background-color: transparent;\n        border: none;\n        margin-left: 60px;\n        margin-top: 15px;\n        width: 24px;\n        height: 24px;\n        .icon{\n            width: 25px;\n            height: 25px;\n        }\n    }\n"])));
exports.DataContainerButton = DataContainerButton;
var DataContainerCheckbox = styled_components_1["default"].td(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    vertical-align: middle;\n"], ["\n    vertical-align: middle;\n"])));
exports.DataContainerCheckbox = DataContainerCheckbox;
var Status = styled_components_1["default"].p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\n    ", "\n    padding: 13px 25px;\n    border-radius: 12px;\n    text-align: center;\n    margin-left: 30px;\n"], ["\n\n    ", "\n    padding: 13px 25px;\n    border-radius: 12px;\n    text-align: center;\n    margin-left: 30px;\n"])), function (props) {
    switch (props.typeStatus) {
        case "Check In":
            return (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                    background-color: #E8FFEE;\n                    color: #5AD07A;\n            "], ["\n                    background-color: #E8FFEE;\n                    color: #5AD07A;\n            "])));
        case "Check Out":
            return (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                    background-color: #FFEDEC;\n                    color: #E23428;\n            "], ["\n                    background-color: #FFEDEC;\n                    color: #E23428;\n            "])));
        case "In Progress":
            return (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                    background-color: #fbfcc2;\n                    color: #ffbb00;\n            "], ["\n                    background-color: #fbfcc2;\n                    color: #ffbb00;\n            "])));
        default:
            return (0, styled_components_1.css)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                background-color: blue;\n                color: white;\n        "], ["\n                background-color: blue;\n                color: white;\n        "])));
    }
});
exports.Status = Status;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
