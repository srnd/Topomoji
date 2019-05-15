"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTriangularFlag = function SvgTriangularFlag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M4 4.375v35.25C23.333 47.85 42.666 13.775 62 22 42.666 2.025 23.333 24.35 4 4.375z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M2 4.118v57.88L6 62V4.12c-.002-2.827-4.001-2.827-4-.002z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M2.994 2.27c.566.322 1.002.91 1.002 1.824l.007 57.878H6V4.094C5.999 2.182 4.179 1.596 2.994 2.27z"
  }));
};

var _default = SvgTriangularFlag;
exports["default"] = _default;