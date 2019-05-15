"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEnvelopeWithArrow = function SvgEnvelopeWithArrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "envelope-with-arrow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 60,
    x2: 32.001,
    y2: 24
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#dbe2e5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ccd5d9"
  })), _react["default"].createElement("path", {
    fill: "url(#envelope-with-arrow_svg__a)",
    d: "M2 24h60v36H2z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M32 30L2 60h60z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope-with-arrow_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 60,
    x2: 32.001,
    y2: 31.201
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.26,
    stopColor: "#e3e9eb"
  }), _react["default"].createElement("stop", {
    offset: 0.454,
    stopColor: "#dae1e4"
  }), _react["default"].createElement("stop", {
    offset: 0.576,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#envelope-with-arrow_svg__b)",
    d: "M32 31.2L2 60h60z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M30.68 49.162L2 24h60L33.319 49.162a2.002 2.002 0 0 1-2.639 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope-with-arrow_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 47.742,
    x2: 32.001,
    y2: -41.608
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b9c2c7"
  }), _react["default"].createElement("stop", {
    offset: 0.046,
    stopColor: "#c2cacf"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#dce2e5"
  }), _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#e6ebed"
  })), _react["default"].createElement("path", {
    fill: "url(#envelope-with-arrow_svg__c)",
    d: "M30.713 48.119L2 24h60L33.286 48.119a2 2 0 0 1-2.573 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope-with-arrow_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 48.588,
    x2: 32.001,
    y2: 24
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.582,
    stopColor: "#e3e9ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#dae3e8"
  })), _react["default"].createElement("path", {
    fill: "url(#envelope-with-arrow_svg__d)",
    d: "M30.713 48.119L2 24h60L33.286 48.119a2 2 0 0 1-2.573 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope-with-arrow_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -92.14,
    y1: 299.141,
    x2: -92.14,
    y2: 269.141,
    gradientTransform: "rotate(90 102.5 213.64)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#envelope-with-arrow_svg__e)",
    d: "M32.002 34L47 18.838h-6.805V4H23.807v14.838H17z"
  }));
};

var _default = SvgEnvelopeWithArrow;
exports["default"] = _default;