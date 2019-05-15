"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUpsideDownFace = function SvgUpsideDownFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "upside-down-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -175.058,
    y1: 28.508,
    x2: -175.058,
    y2: -31.492,
    gradientTransform: "rotate(180 -71.529 15.254)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe261"
  }), _react["default"].createElement("stop", {
    offset: 0.237,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 0.728,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffa027"
  })), _react["default"].createElement("circle", {
    fill: "url(#upside-down-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42,
    cy: 37.5,
    r: 4.5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 37.5,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M19.009 23.609c7.913-5.491 18.075-5.488 25.984 0 1.12.775 1.258-.063.912-.721-5.855-11.195-21.957-11.193-27.813 0-.343.659-.207 1.497.917.721z"
  }));
};

var _default = SvgUpsideDownFace;
exports["default"] = _default;