"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInboxTray = function SvgInboxTray(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C2906D",
    d: "M52.428 26.288l3.877 19.041H7.696l3.878-19.041z"
  }), _react["default"].createElement("radialGradient", {
    id: "inbox-tray_svg__a",
    cx: 68.277,
    cy: 34.989,
    r: 17.106,
    gradientTransform: "matrix(.8667 0 0 9.9997 -27.174 -314.885)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d6a57c"
  }), _react["default"].createElement("stop", {
    offset: 0.534,
    stopColor: "#d3a27a"
  }), _react["default"].createElement("stop", {
    offset: 0.931,
    stopColor: "#cb9973"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c99671"
  })), _react["default"].createElement("path", {
    fill: "url(#inbox-tray_svg__a)",
    d: "M12.441 26.288h39.12v17.416h-39.12z"
  }), _react["default"].createElement("radialGradient", {
    id: "inbox-tray_svg__b",
    cx: 68.277,
    cy: 56.153,
    r: 21.566,
    gradientTransform: "matrix(.8667 0 0 1 -27.174 .008)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c99671"
  }), _react["default"].createElement("stop", {
    offset: 0.425,
    stopColor: "#c7936e"
  }), _react["default"].createElement("stop", {
    offset: 0.741,
    stopColor: "#bf8a65"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b47d56"
  })), _react["default"].createElement("path", {
    fill: "url(#inbox-tray_svg__b)",
    d: "M51.561 41.704h-39.12L9.43 56.117h45.14z"
  }), _react["default"].createElement("path", {
    fill: "#D6A57C",
    d: "M43.297 45.921C42.131 55.674 32 56.117 32 56.117s-10.129-.443-11.295-10.196H6V62h52V45.921H43.297z"
  }), _react["default"].createElement("linearGradient", {
    id: "inbox-tray_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 56.117,
    x2: 32.001,
    y2: 26.002
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fed0ac"
  }), _react["default"].createElement("stop", {
    offset: 0.588,
    stopColor: "#fedec6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fee5d3"
  })), _react["default"].createElement("path", {
    fill: "url(#inbox-tray_svg__c)",
    d: "M53.729 26.001H10.274L6 45.921h14.705C20.705 56.35 32 56.117 32 56.117s11.297.232 11.297-10.196H58l-4.271-19.92zM42.666 44.329C42.666 55.473 32 55 32 55s-10.664.473-10.664-10.671H9.43l3.011-17.041h39.12l3.01 17.041H42.666z"
  }), _react["default"].createElement("linearGradient", {
    id: "inbox-tray_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 42,
    y1: 32,
    x2: 22.001,
    y2: 12,
    gradientTransform: "rotate(180 32 18)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#inbox-tray_svg__d)",
    d: "M32 34l14.001-16h-6V2h-16v16h-6z"
  }));
};

var _default = SvgInboxTray;
exports["default"] = _default;