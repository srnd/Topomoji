"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSagittarius = function SvgSagittarius(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sagittarius_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#sagittarius_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49.677 14.391a2.213 2.213 0 0 0-2.077-2.066l-16.595-.012c-1.419-.001-2.159 1.113-2.159 2.213 0 1.099.74 2.212 2.158 2.212h11.128l-18.04 18.045-6.671-6.671c-.683-.683-1.953-.866-2.727-.294-1.092.81-1.428 2.398-.403 3.424l6.671 6.671-8.064 8.075c-.53.531-.622 1.651-.394 2.314.476 1.385 2.492 1.832 3.542.782l8.045-8.044 6.668 6.671c.681.681 1.959.867 2.73.294 1.088-.808 1.424-2.402.399-3.424l-6.668-6.669 18.039-18.046v11.129c0 2.836 4.427 2.836 4.427 0V14.522l-.009-.131z"
  }));
};

var _default = SvgSagittarius;
exports["default"] = _default;