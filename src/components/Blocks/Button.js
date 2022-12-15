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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var StyledButton = styled_components_1["default"].button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", "\n    padding: 13px 25px;\n    text-align: center;\n    font-family: var(--font-poppins);\n"], ["\n    ", "\n    padding: 13px 25px;\n    text-align: center;\n    font-family: var(--font-poppins);\n"])), function (props) {
    switch (props.typeButton) {
        case "login":
            return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                    transition: background-color 0.1s;\n                    background-color: #135846;\n                    color: #EBF1EF;\n                    border: none;\n                    border-radius: 8px;\n                    font-weight: 600;\n                    width: 50%;\n                    margin-top: 25px;\n                    &:hover{\n                        background-color: #0e3f32;\n                    }\n                "], ["\n                    transition: background-color 0.1s;\n                    background-color: #135846;\n                    color: #EBF1EF;\n                    border: none;\n                    border-radius: 8px;\n                    font-weight: 600;\n                    width: 50%;\n                    margin-top: 25px;\n                    &:hover{\n                        background-color: #0e3f32;\n                    }\n                "])));
        case "contact":
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                background-color: #EBF1EF;\n                color: #135846;\n                border: none;\n                border-radius: 8px;\n                font-weight: 600;\n                max-width: 160px;\n            "], ["\n                background-color: #EBF1EF;\n                color: #135846;\n                border: none;\n                border-radius: 8px;\n                font-weight: 600;\n                max-width: 160px;\n            "])));
        case "notes":
            if (props.enabled) {
                return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    background-color: #EEF9F2;\n                    font-weight: 500;\n                    border: none;\n                    color: #212121;\n                    border-radius: 12px;\n                    margin-left: 30px;\n                    max-width: 160px;\n                "], ["\n                    background-color: #EEF9F2;\n                    font-weight: 500;\n                    border: none;\n                    color: #212121;\n                    border-radius: 12px;\n                    margin-left: 30px;\n                    max-width: 160px;\n                "])));
            }
            else {
                return (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                    pointer-events: none;\n                    background-color: #EEF9F2;\n                    font-weight: 500;\n                    border: 1px solid #799283;\n                    color: #799283;\n                    border-radius: 12px;\n                    margin-left: 30px;\n                    max-width: 160px;\n                "], ["\n                    pointer-events: none;\n                    background-color: #EEF9F2;\n                    font-weight: 500;\n                    border: 1px solid #799283;\n                    color: #799283;\n                    border-radius: 12px;\n                    margin-left: 30px;\n                    max-width: 160px;\n                "])));
            }
        case "create":
            return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    background-color: #135846;\n                    color: #FFFFFF;\n                    border: none;\n                    border-radius: 8px;\n                    font-weight: 600;\n                    width: 213px;\n                    height: 50px;\n            "], ["\n                    background-color: #135846;\n                    color: #FFFFFF;\n                    border: none;\n                    border-radius: 8px;\n                    font-weight: 600;\n                    width: 213px;\n                    height: 50px;\n            "])));
        default:
            return (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                background-color: white;\n                color: black;\n            "], ["\n                background-color: white;\n                color: black;\n            "])));
    }
});
var Button = function (_a) {
    var typeButton = _a.typeButton, text = _a.text, enabled = _a.enabled, click = _a.click;
    return (react_1["default"].createElement(StyledButton, { typeButton: typeButton, enabled: enabled, onClick: click }, text));
};
exports["default"] = Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
