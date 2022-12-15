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
var react_router_1 = require("react-router");
var contextLogin_1 = __importDefault(require("../../context/contextLogin"));
var actions_1 = require("../../context/actions");
var UserStyled_1 = require("./UserStyled");
var User = function () {
    var params = (0, react_router_1.useParams)();
    var _a = (0, react_1.useContext)(contextLogin_1["default"]), log = _a[0], setLog = _a[1];
    var _b = (0, react_1.useState)(log.email), email = _b[0], setEmail = _b[1];
    var changeUser = function () {
        setLog((0, actions_1.updateUser)({ auth: true, email: email }));
        localStorage.setItem("login", JSON.stringify({ auth: true, email: email }));
    };
    return (react_1["default"].createElement(UserStyled_1.UserContainer, null,
        react_1["default"].createElement("h1", null,
            "user n\u00BA",
            params.iduser),
        react_1["default"].createElement("input", { type: "text", value: email, onChange: function (e) { return setEmail(e.target.value); } }),
        react_1["default"].createElement("button", { onClick: changeUser }, "Edit User")));
};
exports["default"] = User;
