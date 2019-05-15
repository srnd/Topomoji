"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBriefcase = function SvgBriefcase(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M43 9h2v3h-2z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M50 14h-8v-3l8 1z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M19 9h2v3h-2z"
  }), _react["default"].createElement("path", {
    fill: "#94553C",
    d: "M45.491 6.824C40.842 6.824 37.534 4 32.001 4c-5.534 0-8.839 2.824-13.492 2.824-.614 0-.738 3.176 0 3.176 4.653 0 7.958-2.824 13.492-2.824 5.533 0 8.841 2.824 13.49 2.824.741 0 .615-3.176 0-3.176z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M14 14h8v-3l-8 1z"
  }), _react["default"].createElement("linearGradient", {
    id: "briefcase_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 60,
    x2: 32,
    y2: 18.17
  }, _react["default"].createElement("stop", {
    offset: 0.461,
    stopColor: "#94553c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#42261b"
  })), _react["default"].createElement("path", {
    fill: "url(#briefcase_svg__a)",
    d: "M61.545 56.355A3.64 3.64 0 0 1 57.914 60H6.085a3.639 3.639 0 0 1-3.631-3.645V18.17h59.091v38.185z"
  }), _react["default"].createElement("path", {
    fill: "#A86144",
    d: "M2 16.698A3.692 3.692 0 0 1 5.688 13h52.625A3.693 3.693 0 0 1 62 16.698V33.59c-4.736 4.978-55.042 5.174-60 0V16.698z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M28 36.5h8V39h-8z"
  }), _react["default"].createElement("radialGradient", {
    id: "briefcase_svg__b",
    cx: 32.56,
    cy: 127.81,
    r: 2.993,
    gradientTransform: "matrix(.9985 0 0 5.5896 .082 -674.304)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e0e0e0"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#d5d7d8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3bbbf"
  })), _react["default"].createElement("path", {
    fill: "url(#briefcase_svg__b)",
    d: "M27.499 38H36.5v5h-9.001z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M28.999 39.5H35V43h-6.001z"
  }), _react["default"].createElement("radialGradient", {
    id: "briefcase_svg__c",
    cx: -282.37,
    cy: 128.684,
    r: 2.479,
    gradientTransform: "matrix(.6658 0 0 3.9573 220.331 -467.561)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e0e0e0"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#d5d7d8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3bbbf"
  })), _react["default"].createElement("path", {
    fill: "url(#briefcase_svg__c)",
    d: "M29.5 40h5v4h-5z"
  }), _react["default"].createElement("radialGradient", {
    id: "briefcase_svg__d",
    cx: 32.56,
    cy: 29.599,
    r: 2.912,
    gradientTransform: "matrix(.9985 0 0 4.4245 .082 -94.625)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e0e0e0"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#d5d7d8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3bbbf"
  })), _react["default"].createElement("path", {
    fill: "url(#briefcase_svg__d)",
    d: "M27.499 35.5H36.5v2h-9.001z"
  }), _react["default"].createElement("linearGradient", {
    id: "briefcase_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 25,
    x2: 32.001,
    y2: 14
  }, _react["default"].createElement("stop", {
    offset: 0.388,
    stopColor: "#c77350",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d48361"
  })), _react["default"].createElement("path", {
    fill: "url(#briefcase_svg__e)",
    d: "M58 14H6c-1.895 0-2.805 1.143-3 3v8h58v-8c-.195-1.857-1.105-3-3-3z"
  }));
};

var _default = SvgBriefcase;
exports["default"] = _default;