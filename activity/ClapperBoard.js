"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClapperBoard = function SvgClapperBoard(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "clapper-board_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 44,
    x2: 62,
    y2: 44
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#6c7e86"
  }), _react["default"].createElement("stop", {
    offset: 0.611,
    stopColor: "#64767d"
  }), _react["default"].createElement("stop", {
    offset: 0.835,
    stopColor: "#58676d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4a575c"
  })), _react["default"].createElement("path", {
    fill: "url(#clapper-board_svg__a)",
    d: "M56 62H8c-4 0-6-2-6-6V26h60v30c0 4-2 6-6 6z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M4 45h56v1H4zM4 53h56v1H4zM4 38h56v1H4z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M2 26h60v8H2z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M4 34l4-8h6l-4 8zM16 34l4-8h6l-4 8zM28 34l4-8h6l-4 8zM40 34l4-8h6l-4 8zM52 34l4-8h6l-4 8zM22 53h1v7h-1zM41 53h1v7h-1z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M62 9.725L59.93 2l-3.864 1.035-1.412 2.449-4.381-.896-5.793 1.551-1.414 2.449-4.378-.897-5.793 1.553-1.414 2.449-4.379-.896-5.792 1.553-1.414 2.447-4.381-.897-5.791 1.553L8.31 17.9l-4.379-.896L2 17.521l2.07 7.725 5.793-1.553 1.412-2.447 4.379.897 5.795-1.553 1.412-2.449 4.38.896 5.792-1.553 1.414-2.447 4.381.897 5.791-1.553 1.416-2.447 4.379.894 5.793-1.551 1.412-2.449z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 9.725l-5.934-6.69-5.793 1.553 5.934 6.689zM50.414 12.828L44.48 6.139l-5.792 1.552 5.931 6.69zM38.828 15.934l-5.933-6.69-5.793 1.553 5.931 6.687zM27.241 19.037L21.31 12.35l-5.795 1.55 5.934 6.69zM15.654 22.143l-5.93-6.69-5.793 1.551 5.932 6.689z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M2 34V18l12 4v8z"
  }), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M11 26c0 4-6 4-6 0s6-4 6 0z"
  }));
};

var _default = SvgClapperBoard;
exports["default"] = _default;