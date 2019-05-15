"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOpenFileFolder = function SvgOpenFileFolder(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "open-file-folder_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -325.5,
    y1: 55,
    x2: -325.5,
    y2: 8.001,
    gradientTransform: "matrix(-1 0 0 1 -296 0)"
  }, _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#e4bb5e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd699"
  })), _react["default"].createElement("path", {
    fill: "url(#open-file-folder_svg__a)",
    d: "M2 55l55-4V13.617c0-.379-.215-.725-.553-.895l-1.148-.574a.992.992 0 0 1-.447-.447l-.576-1.148a.997.997 0 0 0-.893-.553H19.617c-.379 0-.725-.215-.895-.553l-.447-.895A.996.996 0 0 0 17.381 8H5.617a.998.998 0 0 0-.894.553l-.575 1.148c-.098.193-.254.35-.447.447l-1.148.574a1 1 0 0 0-.553.895V55z"
  }), _react["default"].createElement("linearGradient", {
    id: "open-file-folder_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 56,
    x2: 32.001,
    y2: 17
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd699"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe7ba"
  })), _react["default"].createElement("path", {
    fill: "url(#open-file-folder_svg__b)",
    d: "M56 56H3a1 1 0 0 1-1-1s0-17.527 5-34c0 0 1.43-.074 1.855-.337.344-.213.867-1.11.867-1.11a1 1 0 0 1 .895-.553h11.764a1 1 0 0 0 .895-.553l.447-.895a1 1 0 0 1 .895-.553h33.766c.379 0 .725.213.893.553l.449.895a.996.996 0 0 0 .891.553H62c-5 17.5-5 36-5 36a1 1 0 0 1-1 1z"
  }));
};

var _default = SvgOpenFileFolder;
exports["default"] = _default;