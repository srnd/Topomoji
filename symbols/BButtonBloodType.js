"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBButtonBloodType = function SvgBButtonBloodType(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "b-button-blood-type_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#b-button-blood-type_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M44.697 37.465c0 5.399-4.029 9.535-9.473 9.535H20.322c-.653 0-1.019-.364-1.019-1.017V18.017c0-.653.365-1.017 1.019-1.017h11.454c5.131 0 8.85 3.461 8.85 8.099a6.868 6.868 0 0 1-1.086 3.662c3.132 1.632 5.157 4.824 5.157 8.704zM25.196 22.528v5.08h8.632c.582-.583.904-1.39.904-2.187 0-1.682-1.137-2.892-2.958-2.892l-6.578-.001zm13.607 14.616c0-2.422-1.402-4.33-4.285-4.33h-9.322v8.657h9.279c2.914 0 4.328-1.917 4.328-4.327z"
  }));
};

var _default = SvgBButtonBloodType;
exports["default"] = _default;