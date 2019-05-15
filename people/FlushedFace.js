"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFlushedFace = function SvgFlushedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "flushed-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#flushed-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("radialGradient", {
    id: "flushed-face_svg__b",
    cx: 14.19,
    cy: 40.254,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f18d84"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#f29180",
    stopOpacity: 0.749
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#f49e73",
    stopOpacity: 0.488
  }), _react["default"].createElement("stop", {
    offset: 0.775,
    stopColor: "#f8b25f",
    stopOpacity: 0.225
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#flushed-face_svg__b)",
    cx: 14.189,
    cy: 40.254,
    r: 10
  }), _react["default"].createElement("radialGradient", {
    id: "flushed-face_svg__c",
    cx: 49.81,
    cy: 40,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f18d84"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#f29180",
    stopOpacity: 0.749
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#f49e73",
    stopOpacity: 0.488
  }), _react["default"].createElement("stop", {
    offset: 0.775,
    stopColor: "#f8b25f",
    stopOpacity: 0.225
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#flushed-face_svg__c)",
    cx: 49.811,
    cy: 40,
    r: 10
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32 32z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M54.345 16.063c-4.158-3.201-10.314-4.814-13.779-3.832-.732.209-1.167 2.92-.535 2.826 4.854-.725 10.158.131 14.184 2.838.539.363.755-1.352.13-1.832zM9.657 16.066c4.156-3.205 10.313-4.816 13.779-3.834.73.205 1.166 2.92.533 2.824-4.854-.723-10.157.131-14.182 2.838-.54.368-.756-1.349-.13-1.828z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M29 30c0 5.246-4.257 9.5-9.5 9.5-5.246 0-9.5-4.254-9.5-9.5 0-5.244 4.254-9.5 9.5-9.5 5.243 0 9.5 4.256 9.5 9.5zM54 30c0 5.246-4.257 9.5-9.5 9.5-5.246 0-9.5-4.254-9.5-9.5 0-5.244 4.254-9.5 9.5-9.5 5.243 0 9.5 4.256 9.5 9.5z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24 30c0 2.486-2.018 4.5-4.5 4.5-2.487 0-4.5-2.014-4.5-4.5s2.013-4.5 4.5-4.5c2.482 0 4.5 2.014 4.5 4.5zM49 30c0 2.486-2.018 4.5-4.5 4.5-2.488 0-4.5-2.014-4.5-4.5s2.012-4.5 4.5-4.5c2.482 0 4.5 2.014 4.5 4.5zM37.106 52H26.894c-2.524 0-2.524-4 0-4h10.213c2.523 0 2.523 4-.001 4z"
  }));
};

var _default = SvgFlushedFace;
exports["default"] = _default;