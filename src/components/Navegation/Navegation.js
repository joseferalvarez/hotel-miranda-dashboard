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
var react_router_dom_1 = require("react-router-dom");
var LoguedUser_1 = __importDefault(require("./LoguedUser"));
var Logo_1 = __importDefault(require("../Logo/Logo"));
var NavegationStyled_1 = require("./NavegationStyled");
var bi_1 = require("react-icons/bi");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var ai_1 = require("react-icons/ai");
var Navegation = function () {
    var user = {
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Sashenka Gouthier",
        email: "sgouthier0@aboutads.info"
    };
    var _a = (0, react_1.useState)(false), display = _a[0], setDisplay = _a[1];
    var location = (0, react_router_dom_1.useLocation)();
    var displayMenu = function () {
        setDisplay(!display);
    };
    return (react_1["default"].createElement(NavegationStyled_1.NavContainer, { display: display ? "500px" : "0px" },
        react_1["default"].createElement(NavegationStyled_1.ArrowButton, { onClick: displayMenu },
            react_1["default"].createElement(fa_1.FaArrowsAltH, { className: 'arrow' })),
        react_1["default"].createElement(NavegationStyled_1.LogoContainer, null,
            react_1["default"].createElement(Logo_1["default"], null)),
        react_1["default"].createElement(NavegationStyled_1.Navigation, null,
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/" },
                    react_1["default"].createElement(NavegationStyled_1.Link, { route: "/", current: location.pathname },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement(ai_1.AiFillHome, { className: 'icon' }),
                        react_1["default"].createElement("p", null, "Dashboard"))),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/bookings" },
                    react_1["default"].createElement(NavegationStyled_1.Link, { route: "/bookings", current: location.pathname },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement(bs_1.BsCalendarCheck, { className: 'icon' }),
                        react_1["default"].createElement("p", null, "Bookings"))),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/rooms" },
                    react_1["default"].createElement(NavegationStyled_1.Link, { route: "/rooms", current: location.pathname },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement(bi_1.BiKey, { className: 'icon' }),
                        react_1["default"].createElement("p", null, "Rooms"))),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/contact" },
                    react_1["default"].createElement(NavegationStyled_1.Link, { route: "/contact", current: location.pathname },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement(ai_1.AiFillContacts, { className: 'icon' }),
                        react_1["default"].createElement("p", null, "Contact"))),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/users" },
                    react_1["default"].createElement(NavegationStyled_1.Link, { route: "/users", current: location.pathname },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement(fa_1.FaUserFriends, { className: 'icon' }),
                        react_1["default"].createElement("p", null, "Users"))))),
        react_1["default"].createElement(NavegationStyled_1.UserCard, null,
            react_1["default"].createElement(LoguedUser_1["default"], { user: user })),
        react_1["default"].createElement(NavegationStyled_1.NavigationDescription, null, "Hotel Miranda Admin Dashboard"),
        react_1["default"].createElement(NavegationStyled_1.NavigationRights, null, "@2022 All Rights Reserved"),
        react_1["default"].createElement(NavegationStyled_1.NavigationAuthor, null,
            "Making With ",
            react_1["default"].createElement("span", null,
                react_1["default"].createElement(ai_1.AiFillHeart, null)),
            " by Jose Fernando \u00C1lvarez")));
};
exports["default"] = Navegation;
