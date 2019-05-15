"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPaperclip = function SvgPaperclip(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "paperclip_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 130.909,
    y1: 307.248,
    x2: 166.265,
    y2: 271.892,
    gradientTransform: "rotate(-45.001 -220.622 301.514)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.029,
    stopColor: "#9baab0"
  }), _react["default"].createElement("stop", {
    offset: 0.414,
    stopColor: "#b8c3c9"
  }), _react["default"].createElement("stop", {
    offset: 0.751,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#paperclip_svg__a)",
    d: "M31.077 16.672c1.927 2.212 20.951 24.154 21.806 25.245 6.432 8.199-5 17.372-11.678 10.14-12.483-13.517-29.86-31.52-29.86-31.52-6.242-6.489 3.095-16.369 9.897-8.519 1.578 1.822 20.976 22.196 21.763 23.077 4.762 5.347-2.335 11.609-6.591 6.934-2.881-3.166-4.774-6.598-14.032-15.948-.53.242-1.382 1.012-1.556 1.585 9.229 9.322 11.102 12.726 14 15.915 6.483 7.129 16.687-2.273 9.783-10.016-.812-.915-20.2-21.278-21.742-23.057-8.334-9.62-21.713 2.64-13.065 11.627 0 0 17.362 17.986 29.827 31.487 8.673 9.395 23.133-2.704 14.947-13.132-.9-1.148-19.958-23.129-21.875-25.329-1.196.788-1.62 1.506-1.624 1.511z"
  }));
};

var _default = SvgPaperclip;
exports["default"] = _default;