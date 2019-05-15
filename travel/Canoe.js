"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCanoe = function SvgCanoe(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "canoe_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 46.554,
    x2: 32.002,
    y2: 31.391
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c40000"
  }), _react["default"].createElement("stop", {
    offset: 0.032,
    stopColor: "#c70001"
  }), _react["default"].createElement("stop", {
    offset: 0.427,
    stopColor: "#e50008"
  }), _react["default"].createElement("stop", {
    offset: 0.764,
    stopColor: "#f8000c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#canoe_svg__a)",
    d: "M61.412 31.421s-13.068 3.052-29.351 3.059c-16.342.007-29.47-3.059-29.47-3.059s0-1 .482 8.445c.217 4.276 3.007 5.27 4.821 5.509 11.95 1.573 36.262 1.57 48.213 0 1.814-.238 4.604-1.231 4.821-5.509.484-9.445.484-8.445.484-8.445z"
  }), _react["default"].createElement("linearGradient", {
    id: "canoe_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 35.756,
    y1: 33.95,
    x2: 48.821,
    y2: 42.23
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#960000"
  }), _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#960000",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#canoe_svg__b)",
    d: "M56.117 45.343c1.814-.238 4.604-1.231 4.821-5.509.355-6.963.449-8.248.474-8.443-.166.038-10.265 2.374-23.716 2.936L25.798 46.458c10.948.223 22.97-.149 30.319-1.115z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32.062 35.276c-21.4 0-29.391-3.009-29.719-3.138-.376-.146-.484-1.584-.111-1.436.079.029 8.751 3.044 29.83 3.044 21.072 0 29.63-3.013 29.707-3.043.369-.145.27 1.285-.104 1.434-.325.129-8.204 3.139-29.603 3.139z"
  }), _react["default"].createElement("linearGradient", {
    id: "canoe_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 43.066,
    y1: 290.006,
    x2: 51.443,
    y2: 290.006,
    gradientTransform: "rotate(45.001 320.576 137.985)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db9442"
  }), _react["default"].createElement("stop", {
    offset: 0.395,
    stopColor: "#cf843d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b86432"
  })), _react["default"].createElement("path", {
    fill: "url(#canoe_svg__c)",
    d: "M21.196 46.177c-3.397 1.919-11.37 9.608-11.192 10.877.361 2.577 2.396 4.572 4.94 4.943 1.282.188 9.012-7.721 10.928-11.144 2.867-5.131 2.098-6.785 2.098-6.785s-1.69-.767-6.774 2.109z"
  }), _react["default"].createElement("linearGradient", {
    id: "canoe_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 45.182,
    y1: 245.897,
    x2: 49.287,
    y2: 245.897,
    gradientTransform: "rotate(45.001 320.576 137.985)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db9442"
  }), _react["default"].createElement("stop", {
    offset: 0.395,
    stopColor: "#cf843d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b86432"
  })), _react["default"].createElement("path", {
    fill: "url(#canoe_svg__d)",
    d: "M54.001 20.904L51.1 18c-1.011 1.012-1.663 4.572-1.663 4.572s3.555-.656 4.564-1.668z"
  }), _react["default"].createElement("linearGradient", {
    id: "canoe_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 46.514,
    y1: 272.621,
    x2: 47.98,
    y2: 272.621,
    gradientTransform: "rotate(45.001 320.576 137.985)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5a54a"
  }), _react["default"].createElement("stop", {
    offset: 0.34,
    stopColor: "#eb9e47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#db9442"
  })), _react["default"].createElement("path", {
    fill: "url(#canoe_svg__e)",
    d: "M12.214 60.842s-.569-.352-1.025-1.014L52.042 18.94l1.018 1.021-40.846 40.881z"
  }));
};

var _default = SvgCanoe;
exports["default"] = _default;