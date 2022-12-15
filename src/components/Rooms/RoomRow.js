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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var bs_1 = require("react-icons/bs");
var sliceRooms_1 = require("../../features/sliceRooms/sliceRooms");
var react_router_1 = require("react-router");
var hooks_1 = require("../../App/hooks/hooks");
var RoomRowStyled_1 = require("./RoomRowStyled");
var RoomRow = function (_a) {
    var id = _a.id, room = _a.room, index = _a.index, moveRow = _a.moveRow;
    var _b = (0, react_1.useState)(false), showOptions = _b[0], setShowOptions = _b[1];
    var navigate = (0, react_router_1.useNavigate)();
    var dispatch = (0, hooks_1.useAppDispatch)();
    var eraseRoom = function () {
        dispatch((0, sliceRooms_1.deleteRoom)(id));
    };
    var getRoomEdit = function () {
        dispatch((0, sliceRooms_1.getRoom)(id));
        navigate("/rooms/editroom/" + id);
    };
    var getRoomDetails = function () {
        dispatch((0, sliceRooms_1.getRoom)(id));
        navigate("/rooms/" + id);
    };
    var ref = (0, react_1.useRef)(null);
    var _c = (0, react_dnd_1.useDrop)({
        accept: "room",
        collect: function (monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        hover: function (item, monitor) {
            var _a;
            if (!ref.current) {
                return;
            }
            var dragIndex = item.index;
            var hoverIndex = index;
            //Para que no se reemplace por si mismo
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            var hoverBoundingRect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            // Get vertical middle
            var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            var clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            var hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveRow(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        }
    }), handlerId = _c[0].handlerId, drop = _c[1];
    var _d = (0, react_dnd_1.useDrag)({
        type: "room",
        item: function () {
            return { id: id, index: index };
        },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging()
        }); }
    }), isDragging = _d[0].isDragging, drag = _d[1];
    var opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (react_1["default"].createElement(RoomRowStyled_1.Row, { key: room.id, ref: ref, "data-handler-id": handlerId, opacity: opacity },
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(RoomRowStyled_1.RoomNameContainer, null,
                react_1["default"].createElement("img", { src: room.photo, alt: "" }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(RoomRowStyled_1.RoomId, null,
                        "#",
                        room.id),
                    react_1["default"].createElement(RoomRowStyled_1.RoomNumber, null, room.number)))),
        react_1["default"].createElement(RoomRowStyled_1.DataContainer, null,
            react_1["default"].createElement(RoomRowStyled_1.RoomText, null, room.type)),
        react_1["default"].createElement(RoomRowStyled_1.DataContainer, null,
            react_1["default"].createElement(RoomRowStyled_1.RoomText, null, room.amenities.map(function (amenitie, index) { return (react_1["default"].createElement("span", { key: index },
                amenitie,
                " ")); }))),
        react_1["default"].createElement(RoomRowStyled_1.DataContainer, null,
            react_1["default"].createElement(RoomRowStyled_1.RoomPrice, null,
                "$",
                room.price,
                react_1["default"].createElement("span", null, "/night"))),
        react_1["default"].createElement(RoomRowStyled_1.DataContainer, null,
            react_1["default"].createElement(RoomRowStyled_1.RoomPrice, null,
                "$",
                room.offer,
                react_1["default"].createElement("span", null, "/night"))),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(RoomRowStyled_1.RoomStatus, { status: room.status ? "#5AD07A" : "#E23428" }, room.status ? "Available" : "Booked")),
        react_1["default"].createElement(RoomRowStyled_1.DataContainerButton, null,
            react_1["default"].createElement("button", { onClick: function () { return setShowOptions(!showOptions); } },
                react_1["default"].createElement(bs_1.BsThreeDotsVertical, { className: 'icon' })),
            showOptions ?
                react_1["default"].createElement(RoomRowStyled_1.DropDown, null,
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("button", { onClick: getRoomDetails },
                                "Details Room ",
                                room.number)),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("button", { onClick: getRoomEdit },
                                "Edit Room ",
                                room.number)),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("button", { onClick: eraseRoom },
                                "Delete Room ",
                                room.number))))
                : null)));
};
exports["default"] = RoomRow;
