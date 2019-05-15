"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrokenHeart = function SvgBrokenHeart(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "broken-heart_svg__a",
    cx: 30.5,
    cy: 20.166,
    r: 27.579,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#broken-heart_svg__a)",
    d: "M61.026 18.24C56.55 5.201 44.341 4.908 37.909 10.288 33.324 14.122 30.974 21.6 30.974 21.6l8.008 1.406-8.358 14.875 9.308-1.842-4.585 16.514-1.16-12.229-10.799 2.289 8.43-15.231-7.399-1.427 4.1-12.722C22.123 6.318 5.577 5.042 2.344 21.625-1.501 41.378 35.363 57 35.363 57c8.423-5.879 31.409-22.031 25.663-38.76z"
  }), _react["default"].createElement("path", {
    fill: "#850505",
    d: "M28.518 13.233l.798 2.662-3.683 9.875-2.488.843z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M31.396 27.979l1.928-1.409-7.59-1.071-2.589 1.114z"
  }), _react["default"].createElement("path", {
    fill: "#850505",
    d: "M21.897 43.478l3.216-1.588 8.211-15.32-2.574 1.303z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M34.143 40.74l1.071-1.342-9.909 2.134-3.408 1.946z"
  }), _react["default"].createElement("path", {
    fill: "#850505",
    d: "M35.348 52.553l-.134-13.155-1.422 1.42z"
  }));
};

var _default = SvgBrokenHeart;
exports["default"] = _default;