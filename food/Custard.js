"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCustard = function SvgCustard(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M32 62C18.215 62 7 56.293 7 49.279c0-7.016 11.215-12.721 25-12.721s25 5.705 25 12.721C57 56.293 45.785 62 32 62z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M32 60.969c-16.542 0-30-6.85-30-15.266 0-8.418 13.458-15.265 30-15.265 16.541 0 30 6.847 30 15.265 0 8.416-13.459 15.266-30 15.266z"
  }), _react["default"].createElement("radialGradient", {
    id: "custard_svg__a",
    cx: 32,
    cy: 44.668,
    r: 29.075,
    gradientTransform: "matrix(1 0 0 .4633 0 23.813)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.527,
    stopColor: "#c6c6c6"
  }), _react["default"].createElement("stop", {
    offset: 0.658,
    stopColor: "#cfd0d0"
  }), _react["default"].createElement("stop", {
    offset: 0.881,
    stopColor: "#e7eaeb"
  }), _react["default"].createElement("stop", {
    offset: 0.964,
    stopColor: "#f2f5f7"
  })), _react["default"].createElement("path", {
    fill: "url(#custard_svg__a)",
    d: "M61.156 45.098c0 7.936-13.055 14.367-29.156 14.367-16.103 0-29.158-6.432-29.158-14.367 0-7.93 13.055-14.362 29.158-14.362 16.102-.001 29.156 6.432 29.156 14.362z"
  }), _react["default"].createElement("path", {
    fill: "#BA4A18",
    d: "M49.469 37.041c-3.232-1.625-31.581-6.532-37.786 3.533-1.729 2.805-.315 6.637 4.928 9.273 3.232 1.627 10.084 4.344 14.437 4.957 4.353.609 8.416-1.627 11.847-2.318 5.568-1.117 9.172-3.41 9.479-6.969.308-3.556 2.337-5.843-2.905-8.476z"
  }), _react["default"].createElement("path", {
    fill: "#7D3D15",
    d: "M49.99 43.211c0 11.459-35.98 11.459-35.98 0 0-9.529 35.98-9.529 35.98 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "custard_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 15.348,
    y1: 37.224,
    x2: 48.652,
    y2: 37.224
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffdc96"
  }), _react["default"].createElement("stop", {
    offset: 0.195,
    stopColor: "#fdd790"
  }), _react["default"].createElement("stop", {
    offset: 0.452,
    stopColor: "#f7ca80"
  }), _react["default"].createElement("stop", {
    offset: 0.742,
    stopColor: "#eeb364"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e39a46"
  })), _react["default"].createElement("path", {
    fill: "url(#custard_svg__b)",
    d: "M45.598 24.678H18.401s-3.054 17.861-3.054 18.072c0 3.879 7.455 7.02 16.653 7.02 9.195 0 16.652-3.141 16.652-7.02 0-.211-3.054-18.072-3.054-18.072z"
  }), _react["default"].createElement("path", {
    fill: "#BA4A18",
    d: "M45.875 25.849C45.875 22.618 39.664 20 32 20c-7.665 0-13.877 2.618-13.877 5.849 0 3.229 6.213 5.847 13.877 5.847 8.469 0 13.875-4.114 13.875-5.847z"
  }), _react["default"].createElement("linearGradient", {
    id: "custard_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 19.145,
    y1: 25.219,
    x2: 44.853,
    y2: 25.219
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ba4a18"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7d3d15"
  })), _react["default"].createElement("path", {
    fill: "url(#custard_svg__c)",
    d: "M44.854 25.218c0-2.881-5.756-5.218-12.855-5.218s-12.853 2.336-12.853 5.218c0 2.886 5.754 5.221 12.853 5.221 7.845-.001 12.855-3.673 12.855-5.221z"
  }));
};

var _default = SvgCustard;
exports["default"] = _default;