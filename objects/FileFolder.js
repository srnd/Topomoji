"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileFolder = function SvgFileFolder(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "file-folder_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -328,
    y1: 51,
    x2: -328,
    y2: 8.001,
    gradientTransform: "matrix(-1 0 0 1 -296 0)"
  }, _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#e4bb5e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd699"
  })), _react["default"].createElement("path", {
    fill: "url(#file-folder_svg__a)",
    d: "M2 51h60V13.617c0-.379-.215-.725-.553-.895l-1.148-.574a.992.992 0 0 1-.447-.447l-.576-1.148a.997.997 0 0 0-.893-.553H21.617c-.379 0-.725-.215-.895-.553l-.447-.895A.996.996 0 0 0 19.381 8H5.617a.998.998 0 0 0-.894.553l-.575 1.148c-.098.193-.254.35-.447.447l-1.148.574a1 1 0 0 0-.553.895V51z"
  }), _react["default"].createElement("linearGradient", {
    id: "file-folder_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 56,
    x2: 32.001,
    y2: 13.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd699"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe7ba"
  })), _react["default"].createElement("path", {
    fill: "url(#file-folder_svg__b)",
    d: "M61 56H3a1 1 0 0 1-1-1V17h2l.723-1.447A.998.998 0 0 1 5.617 15h13.764a1 1 0 0 0 .895-.553l.447-.895a1 1 0 0 1 .895-.553h36.766c.379 0 .725.213.893.553l.449.895a.996.996 0 0 0 .891.553H62v40a1 1 0 0 1-1 1z"
  }));
};

var _default = SvgFileFolder;
exports["default"] = _default;