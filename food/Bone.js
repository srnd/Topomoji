"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBone = function SvgBone(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "bone_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -154.204,
    y1: 197.563,
    x2: -138.882,
    y2: 197.563,
    gradientTransform: "rotate(-45.001 -258.266 -103.5)"
  }, _react["default"].createElement("stop", {
    offset: 0.115,
    stopColor: "#ccc2be"
  }), _react["default"].createElement("stop", {
    offset: 0.295,
    stopColor: "#d3cac7"
  }), _react["default"].createElement("stop", {
    offset: 0.656,
    stopColor: "#ddd6d4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e0dad8"
  })), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#bone_svg__a)",
    d: "M51.792 44.472C36.813 31.554 19.234 13.088 19.528 12.208c3.291-9.776-9.421-14.742-12.435-4.705 0 0-2.769 9.075 6.06 11.197.74.178 19.043 15.769 32.035 33.028 0 0 4.998 5.911 11.307 5.179 10.039-3.013 5.072-15.726-4.703-12.435z"
  }), _react["default"].createElement("radialGradient", {
    id: "bone_svg__b",
    cx: 86.422,
    cy: 309.795,
    r: 10.366,
    gradientTransform: "scale(.994 -1.0037) rotate(45 441.704 59.835)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e0dad8"
  }), _react["default"].createElement("stop", {
    offset: 0.464,
    stopColor: "#ded8d5"
  }), _react["default"].createElement("stop", {
    offset: 0.754,
    stopColor: "#d7d0cd"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#ccc2be"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ccc2be"
  })), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#bone_svg__b)",
    d: "M13.153 18.7C.581 23.786-1.25 9.823 7.093 7.503c8.355-2.321 10.369 9.459 6.06 11.197z"
  }), _react["default"].createElement("radialGradient", {
    id: "bone_svg__c",
    cx: 87.387,
    cy: 120.333,
    r: 10.367,
    gradientTransform: "scale(1.0037 .994) rotate(-45 -15.858 131.677)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e0dad8"
  }), _react["default"].createElement("stop", {
    offset: 0.464,
    stopColor: "#ded8d5"
  }), _react["default"].createElement("stop", {
    offset: 0.754,
    stopColor: "#d7d0cd"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#ccc2be"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ccc2be"
  })), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#bone_svg__c)",
    d: "M45.298 50.847c-5.084 12.572 8.879 14.404 11.197 6.061 2.322-8.358-9.457-10.37-11.197-6.061z"
  }));
};

var _default = SvgBone;
exports["default"] = _default;