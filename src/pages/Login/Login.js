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
var actions_1 = require("../../context/actions");
var Button_1 = __importDefault(require("../../components/Blocks/Button"));
var Logo_1 = __importDefault(require("../../components/Logo/Logo"));
var contextLogin_1 = __importDefault(require("../../context/contextLogin"));
var LoginStyled_1 = require("./LoginStyled");
var fa_1 = require("react-icons/fa");
var ri_1 = require("react-icons/ri");
var Login = function () {
    var _a = (0, react_1.useContext)(contextLogin_1["default"]), log = _a[0], setLog = _a[1];
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), pass = _c[0], setPass = _c[1];
    var emailHard = log.email || "josefer@gmail.com";
    var passHard = "1234";
    var checkLogin = function () {
        if (emailHard === email && passHard === pass) {
            setLog((0, actions_1.login)({ auth: true, email: email }));
            localStorage.setItem("login", JSON.stringify({ auth: true, email: email }));
        }
        else {
            alert("usuario o contraseña incorrectos");
        }
    };
    if (!log.auth) {
        return (react_1["default"].createElement(LoginStyled_1.LoginContainer, null,
            react_1["default"].createElement(LoginStyled_1.LoginCard, null,
                react_1["default"].createElement(LoginStyled_1.LogoContainer, null,
                    react_1["default"].createElement(Logo_1["default"], null)),
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement(LoginStyled_1.InputContainer, null,
                        react_1["default"].createElement(LoginStyled_1.Input, { type: "text", className: 'input-user', value: email, placeholder: "e-mail", onChange: function (e) { return setEmail(e.target.value); } }),
                        react_1["default"].createElement(LoginStyled_1.Icon, null,
                            react_1["default"].createElement(fa_1.FaUser, { className: 'input-icon' }))),
                    react_1["default"].createElement(LoginStyled_1.InputContainer, null,
                        react_1["default"].createElement(LoginStyled_1.Input, { type: "password", className: 'input-pass', value: pass, placeholder: "password", onChange: function (e) { return setPass(e.target.value); } }),
                        react_1["default"].createElement(LoginStyled_1.Icon, null,
                            react_1["default"].createElement(ri_1.RiLockPasswordFill, { className: 'input-icon' }))),
                    react_1["default"].createElement(Button_1["default"], { typeButton: "login", text: "LOGIN", click: checkLogin, enabled: false })))));
    }
    else {
        return (react_1["default"].createElement(react_router_1.Navigate, { to: "/" }));
    }
};
exports["default"] = Login;
