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
var react_1 = __importStar(require("react"));
var contextLogin_1 = __importDefault(require("../../context/contextLogin"));
var react_router_dom_1 = require("react-router-dom");
var LoguedUserStyled_1 = require("./LoguedUserStyled");
var styled_components_1 = __importDefault(require("styled-components"));
var LinkButton = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #EBF1EF;\n    border: none;\n    border-radius: 8px;\n    width: 160px;\n    height: 50px;\n    a{\n        text-align: center;\n        font-family: var(--font-poppins);\n        text-decoration: none;\n        color: #135846;\n        font-size: 14px;\n        font-weight: 600;\n        display: block;\n        padding: 15px;\n    }\n"], ["\n    background-color: #EBF1EF;\n    border: none;\n    border-radius: 8px;\n    width: 160px;\n    height: 50px;\n    a{\n        text-align: center;\n        font-family: var(--font-poppins);\n        text-decoration: none;\n        color: #135846;\n        font-size: 14px;\n        font-weight: 600;\n        display: block;\n        padding: 15px;\n    }\n"])));
var LoguedUser = function (_a) {
    var user = _a.user;
    var log = (0, react_1.useContext)(contextLogin_1["default"])[0];
    return (react_1["default"].createElement(LoguedUserStyled_1.Card, null,
        react_1["default"].createElement("img", { className: 'image', src: user.photo, alt: "" }),
        react_1["default"].createElement(LoguedUserStyled_1.UserName, null, user.name),
        react_1["default"].createElement(LoguedUserStyled_1.UserEmail, null, log.email),
        react_1["default"].createElement(LinkButton, null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/users/" + log.email }, "Edit user"))));
};
exports["default"] = LoguedUser;
var templateObject_1;
