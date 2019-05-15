"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLocked = function SvgLocked(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "locked_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 32,
    x2: 32.001,
    y2: 4
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bec8cc"
  }), _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#bbc5c9"
  }), _react["default"].createElement("stop", {
    offset: 0.443,
    stopColor: "#b2bcc0"
  }), _react["default"].createElement("stop", {
    offset: 0.601,
    stopColor: "#a3adb1"
  }), _react["default"].createElement("stop", {
    offset: 0.745,
    stopColor: "#8e979b"
  }), _react["default"].createElement("stop", {
    offset: 0.878,
    stopColor: "#737c7f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#535b5e"
  })), _react["default"].createElement("path", {
    fill: "url(#locked_svg__a)",
    d: "M32 4c-7.181 0-13 5.904-13 13.188V32h5.443V17.188c0-10.252 15.113-10.252 15.113 0V32H45V17.188C45 9.904 39.178 4 32 4z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 25.981,
    y1: 32,
    x2: 25.981,
    y2: 4.742
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fafdff",
    stopOpacity: 0.7
  }), _react["default"].createElement("stop", {
    offset: 0.897,
    stopColor: "#fafdff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#locked_svg__b)",
    d: "M32.481 4.742c-7.181 0-13 5.906-13 13.189V32h1.669V17.932c0-8.586 6.26-12.61 11.331-13.19z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -121.369,
    y1: 32,
    x2: -121.369,
    y2: 4.742,
    gradientTransform: "matrix(-1 0 0 1 -83.456 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0b0c0d",
    stopOpacity: 0.3
  }), _react["default"].createElement("stop", {
    offset: 0.897,
    stopColor: "#0b0c0d",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#locked_svg__c)",
    d: "M31.413 4.742c7.181 0 13 5.906 13 13.189V32h-1.669V17.932c0-8.586-6.26-12.61-11.331-13.19z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 22.566,
    y1: 19.822,
    x2: 41.434,
    y2: 19.822
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0b0c0d",
    stopOpacity: 0.3
  }), _react["default"].createElement("stop", {
    offset: 0.099,
    stopColor: "#242526",
    stopOpacity: 0.32
  }), _react["default"].createElement("stop", {
    offset: 0.727,
    stopColor: "#bcbfc1",
    stopOpacity: 0.445
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fafdff",
    stopOpacity: 0.5
  })), _react["default"].createElement("path", {
    fill: "url(#locked_svg__d)",
    d: "M41.434 32V17.523c0-13.172-18.867-13.172-18.867 0V32h1.293V16.748c0-10.557 16.281-10.557 16.281 0V32h1.293z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 14,
    y1: 45.56,
    x2: 50,
    y2: 45.56
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd231"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#db7600"
  })), _react["default"].createElement("path", {
    fill: "url(#locked_svg__e)",
    d: "M50 58.898c0 .606-.496 1.102-1.102 1.102H15.102A1.105 1.105 0 0 1 14 58.898V32.225c0-.605.496-1.104 1.102-1.104h33.797c.605 0 1.102.498 1.102 1.104v26.673z"
  }), _react["default"].createElement("path", {
    fill: "#C46A12",
    d: "M49.082 31.121c0 1.557-34.164 1.557-34.164 0h34.164z"
  }));
};

var _default = SvgLocked;
exports["default"] = _default;