"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLabel = function SvgLabel(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M40.808 22.8c3.823-2.644 5.847-.435-.25 1.788l.25-1.788z"
  }), _react["default"].createElement("linearGradient", {
    id: "label_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 25.8,
    y1: 62,
    x2: 25.8,
    y2: 14.593
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f9b700"
  }), _react["default"].createElement("stop", {
    offset: 0.246,
    stopColor: "#fbbe1b"
  }), _react["default"].createElement("stop", {
    offset: 0.525,
    stopColor: "#fcc533"
  }), _react["default"].createElement("stop", {
    offset: 0.783,
    stopColor: "#fdc942"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47"
  })), _react["default"].createElement("path", {
    fill: "url(#label_svg__a)",
    d: "M48.99 35.482l.605-10.256a1.978 1.978 0 0 0-.578-1.516l-8.573-8.538a1.99 1.99 0 0 0-1.521-.576l-10.298.604a1.985 1.985 0 0 0-1.287.576L2.582 40.432a1.974 1.974 0 0 0 0 2.798l18.265 18.19a1.992 1.992 0 0 0 2.81 0l24.756-24.654c.343-.344.549-.8.577-1.284zm-10.903-9.67a2.962 2.962 0 0 1 0-4.198 2.99 2.99 0 0 1 4.216 0 2.962 2.962 0 0 1 0 4.198 2.99 2.99 0 0 1-4.216 0z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M37.643 21.171a3.585 3.585 0 0 0 0 5.083 3.618 3.618 0 0 0 5.104.001 3.584 3.584 0 0 0 0-5.084 3.617 3.617 0 0 0-5.104 0zm.73.726a2.586 2.586 0 0 1 3.646.001 2.56 2.56 0 0 1 0 3.63 2.584 2.584 0 0 1-3.646.001 2.56 2.56 0 0 1 0-3.632z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M39.254 23.462C43.9 11.226 53.721 9.487 60.896 9.003c1.473-.1 1.471 1.819 0 1.948-7.335.641-16.146 2.515-19.752 13.005-.408 1.192-2.143.731-1.89-.494z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M44.924 19.634c5.064-5.042 7.244-10.907 8.085-16.54.218-1.457 2.14-1.461 1.954 0-.717 5.568-3.401 12.701-8.646 17.926l-1.393-1.386z"
  }));
};

var _default = SvgLabel;
exports["default"] = _default;