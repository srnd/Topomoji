"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPeaceSymbol = function SvgPeaceSymbol(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "peace-symbol_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 88,
    y1: -82,
    x2: 88,
    y2: -142,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00c9ff"
  }), _react["default"].createElement("stop", {
    offset: 0.498,
    stopColor: "#5d2dff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f600ff"
  })), _react["default"].createElement("path", {
    fill: "url(#peace-symbol_svg__a)",
    d: "M32 2C15.433 2 2 15.431 2 32c0 16.566 13.433 30 30 30s30-13.434 30-30C62 15.431 48.566 2 32 2zm3 35.518l12.652 12.651A23.882 23.882 0 0 1 35 55.793V37.518zm-6 18.274a23.867 23.867 0 0 1-12.651-5.624L29 37.516v18.276zM8 32C8 19.763 17.166 9.687 29 8.207V29.03L12.32 45.71A23.85 23.85 0 0 1 8 32zm43.68 13.711L35 29.032V8.207C46.836 9.687 56 19.763 56 32c0 5.102-1.604 9.823-4.32 13.711z"
  }));
};

var _default = SvgPeaceSymbol;
exports["default"] = _default;