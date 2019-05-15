"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChopsticks = function SvgChopsticks(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M55.504 5l2.916 3.487s-.046.041-54.897 44.605c-.879.715-2.08-.733-1.234-1.478L55.504 5z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M54.12 6.212l2.889 3.422-6.847 5.563-2.597-3.243z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#FFF",
    d: "M55.783 5.335l.983 1.174L2.288 51.615z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M59.398 15.497L62 19.229 3.446 58.851c-.937.635-2.01-.913-1.102-1.577l57.054-41.777z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M57.857 16.626l2.526 3.696-7.168 4.853-2.361-3.42z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#FFF",
    d: "M59.648 15.856l.877 1.255-58.181 40.16z"
  }));
};

var _default = SvgChopsticks;
exports["default"] = _default;