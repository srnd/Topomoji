"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMusicalNotes = function SvgMusicalNotes(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "musical-notes_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 4.545,
    y1: 7.039,
    x2: 19.092,
    y2: 32.236
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#musical-notes_svg__a)",
    d: "M17.646 30.534V13.647s8.156 3.938 3.76 12.631c-.146.29 1.119.602 1.283.322 8.971-15.382-2.893-14.333-5.043-24.599h-4.375V25.48c-.834-.266-2.311-.414-3.27-.414-10.668 0-10.668 10.936 0 10.936 3.911-.001 7.645-2.45 7.645-5.468z"
  }), _react["default"].createElement("linearGradient", {
    id: "musical-notes_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 40.545,
    y1: 7.038,
    x2: 55.093,
    y2: 32.236
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#musical-notes_svg__b)",
    d: "M53.646 30.534V13.647s8.156 3.938 3.76 12.631c-.146.29 1.119.602 1.283.322C67.66 11.217 55.796 12.266 53.646 2h-4.375v23.479c-.834-.266-2.311-.414-3.27-.414-10.668 0-10.668 10.936 0 10.936 3.91 0 7.645-2.449 7.645-5.467z"
  }), _react["default"].createElement("linearGradient", {
    id: "musical-notes_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 17.545,
    y1: 33.038,
    x2: 32.093,
    y2: 58.236
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#musical-notes_svg__c)",
    d: "M30.646 56.534V39.646s8.156 3.938 3.76 12.631c-.146.29 1.119.602 1.283.322 8.971-15.383-2.893-14.334-5.043-24.6h-4.375v23.479c-.834-.266-2.311-.414-3.27-.414-10.668 0-10.668 10.936 0 10.936 3.91.001 7.645-2.448 7.645-5.466z"
  }));
};

var _default = SvgMusicalNotes;
exports["default"] = _default;