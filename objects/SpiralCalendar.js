"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSpiralCalendar = function SvgSpiralCalendar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "spiral-calendar_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 20.622,
    x2: 32.001,
    y2: 4
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f33"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#ee2125"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf000a"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-calendar_svg__a)",
    d: "M62 5.5c0-.824-.675-1.5-1.5-1.5h-57C2.675 4 2 4.676 2 5.5v15.121h60V5.5z"
  }), _react["default"].createElement("path", {
    fill: "#E2E7EB",
    d: "M2 20.622V60.5c0 .826.675 1.5 1.5 1.5h57c.825 0 1.5-.674 1.5-1.5V20.622H2z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M10.5 20.622h43V62h-43z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M11.311 9.245c0 2.756-4.139 2.756-4.139 0 0-2.763 4.139-2.763 4.139 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-calendar_svg__b",
    cx: 9.241,
    cy: 6.42,
    r: 3.016,
    gradientTransform: "matrix(1 0 0 1.3 0 -2.209)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-calendar_svg__b)",
    d: "M9.24 2c-.57 0-1.033.462-1.033 1.035v6.208a1.034 1.034 0 0 0 2.068 0V3.035C10.275 2.462 9.813 2 9.24 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.689 9.245c0 2.756-4.139 2.756-4.139 0 .001-2.763 4.139-2.763 4.139 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-calendar_svg__c",
    cx: 20.62,
    cy: 6.42,
    r: 3.016,
    gradientTransform: "matrix(1 0 0 1.3 0 -2.209)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-calendar_svg__c)",
    d: "M20.621 2c-.572 0-1.035.463-1.035 1.035v6.208a1.034 1.034 0 0 0 2.068 0V3.035c0-.573-.463-1.035-1.033-1.035z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M34.068 9.245c0 2.756-4.139 2.756-4.139 0 .001-2.763 4.139-2.763 4.139 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-calendar_svg__d",
    cx: 31.999,
    cy: 6.42,
    r: 3.016,
    gradientTransform: "matrix(1 0 0 1.3 0 -2.209)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-calendar_svg__d)",
    d: "M32 2c-.572 0-1.035.463-1.035 1.035v6.208a1.034 1.034 0 0 0 2.068 0V3.035C33.033 2.462 32.572 2 32 2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M56.826 9.245c0 2.756-4.137 2.756-4.137 0 0-2.763 4.137-2.763 4.137 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-calendar_svg__e",
    cx: 54.758,
    cy: 6.42,
    r: 3.016,
    gradientTransform: "matrix(1 0 0 1.3 0 -2.209)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-calendar_svg__e)",
    d: "M54.758 2c-.572 0-1.035.463-1.035 1.035v6.208a1.034 1.034 0 0 0 2.07 0V3.035c0-.573-.463-1.035-1.035-1.035z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M45.447 9.245c0 2.756-4.137 2.756-4.137 0 .001-2.763 4.137-2.763 4.137 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "spiral-calendar_svg__f",
    cx: 43.379,
    cy: 6.42,
    r: 3.016,
    gradientTransform: "matrix(1 0 0 1.3 0 -2.209)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e5eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#spiral-calendar_svg__f)",
    d: "M43.379 2c-.572 0-1.035.463-1.035 1.035v6.208a1.034 1.034 0 0 0 2.07 0V3.035c0-.573-.463-1.035-1.035-1.035z"
  }), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M18.883 20.622h.518V62h-.518zM10.313 20.622h.518V62h-.518zM27.455 20.622h.518V62h-.518zM44.598 20.622h.518V62h-.518zM36.025 20.622h.518V62h-.518zM53.168 20.622h.518V62h-.518z"
  }), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M2 45.189h60v.518H2zM2 53.465h60v.518H2zM2 28.637h60v.518H2zM2 36.914h60v.516H2z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M23.002 17.61c-.01-.131.059-.201.184-.201h.604c.113 0 .184.07.199.193.061.602.445.834.971.834.582 0 .984-.283.984-.898v-4.049c0-.123.068-.191.191-.191h.6c.123 0 .191.068.191.191v4.049c0 1.27-.953 1.855-1.967 1.855-.967 0-1.873-.529-1.957-1.783zM27.955 17.469v-3.98c0-.123.066-.191.191-.191h.6c.123 0 .191.068.191.191v3.92c0 .66.402 1.027 1.154 1.027s1.154-.367 1.154-1.027v-3.92c0-.123.068-.191.193-.191h.598c.123 0 .193.068.193.191v3.98c0 1.254-.955 1.924-2.139 1.924s-2.135-.67-2.135-1.924zM36.723 18.534v.557c0 .125-.07.191-.193.191h-2.992c-.125 0-.193-.066-.193-.191v-5.602c0-.123.068-.191.193-.191h.598c.125 0 .193.068.193.191v4.854h2.201c.122-.001.193.068.193.191zM40.963 13.528l-1.859 3.059v2.504c0 .125-.068.191-.191.191h-.6c-.123 0-.191-.066-.191-.191v-2.512l-1.855-3.051c-.082-.133-.021-.23.129-.23h.691a.24.24 0 0 1 .227.133l1.303 2.215 1.301-2.215a.244.244 0 0 1 .227-.133h.693c.146-.001.207.097.125.23z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M20.404 43.775l5.176-5.709c.584-.645 1.488.174.902.818l-5.176 5.709c-.497.552-1.488-.171-.902-.818z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M25.59 44.594l-5.176-5.709a.61.61 0 0 1 .902-.818l5.176 5.709c.586.646-.404 1.369-.902.818z"
  }));
};

var _default = SvgSpiralCalendar;
exports["default"] = _default;